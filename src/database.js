var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leigo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB to");
});

// TODO: Using unsafe implicit references to other schemas - fix this!

// First, register some schemas
var techStackSchema = mongoose.Schema({
    title: String,
    difficulty: Number,
    image: String,
});
var TechStack = mongoose.model("TechStack", techStackSchema);

// Create the base tech stacks if they don't already exist
TechStack.find({}, function(err, techs) {
    if (err) console.log(err);
    if (techs.length == 0) {
        new TechStack({title: "NodeJS", difficulty: 3, image: "http://cdn.codesamplez.com/wp-content/uploads/2014/09/nodejs1.png"}).save();
        new TechStack({title: "React", difficulty: 7, image: "http://yycjs.com/real-world-react/img/react-logo.png"}).save();
        new TechStack({title: "Android", difficulty: 4, image: "https://www.droid-life.com/wp-content/uploads/2012/01/android-logo.png"}).save();
        new TechStack({title: "MongoDB", difficulty: 2, image: "https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png"}).save();
    }
});

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    image: String,
    tech: [String],
    primary: String,
    //secondary: [String],
    commitment: Number,
    linkedin: String,
    personal: String,
    github: String,
    bio: String,
    rating: Number,
    ratings: [{value: Number, date: String}]
});
var User = mongoose.model("User", userSchema);

var taskSchema = mongoose.Schema({
    title: String,
    assigned: {type: mongoose.Schema.ObjectId, ref: 'User'},
    accepted: Boolean,
    finished: Boolean,
    comments: [{user: {type: mongoose.Schema.ObjectId, ref: 'User'}, content: String, date: String}],
    description: String,
    file: String,
    amount: Number,
    developerSummary: String,
    developerInstructions: String,
    developerLink: String,
    project: String,
});
var Task = mongoose.model("Task", taskSchema);

var projectSchema = mongoose.Schema({
    creator: String,//{type: mongoose.Schema.ObjectId, ref: 'User'},
    totalBudget: Number,
    description: String,
    deadline: String,
    title: String
});
var Project = mongoose.model("Project", projectSchema);

var inboxSchema = mongoose.Schema({
    title: String,
    message: String,
    date: String,
    read: Boolean,
    user: String,
    deleted: Boolean,
    active: Boolean
});
var InboxItem = mongoose.model("InboxItem", inboxSchema);

var messageSchema = mongoose.Schema({
    userimage: String,
    message: String,
    username: String,
    timestamp: String,
    project: String
});
var Message = mongoose.model("Message", messageSchema);

// Now define all the endpoints

// Creates or updates a user given their information
function upsertUser(req, res, next) {
    var query = {'username': req.body.username};
    User.findOneAndUpdate(query, req.body, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.json({user: doc});
    });
}

// Creates a project given information
function createProject(req, res, next) {
    new Project(req.body).save(function(err, doc) {
        if (err) return res.send(500, { error: err });
        
        // Create invites, while returning
        _createArchitectInvites(doc, 2.0);
        
        return res.json({project: doc});
    });
}

function getProjects(req, res, next) {
    Project.find({}, function(err, projects) {
        if (err) return res.send(500, { error: err });
        return res.json({projects: projects});
    })
}

function getProject(req, res, next) {
    Project.findOne({_id: req.query.id}, function(err, project) {
        if (err) return res.send(500, { error: err });
        Task.find({project: req.query.id}, function(err, tasks) {
            return res.json({project: project, tasks: tasks});
        });
    })
}

function getUser(req, res, next) {
    var query = {'username': req.query.username};
    User.findOne(query, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.json({user: doc});
    });
}

function addTask(req, res, next) {
    
    new Task(req.body).save(function(err, doc) {
        if (err) return res.send(500, { error: err });
        Task.find({project: req.body.project}, function(err, tasks) {
            if (err) return res.send(500, { error: err });
            Project.findOne({_id: req.body.project}, function(err, project) {
                if (err) return res.send(500, { error: err });
                res.status(200).json({project: project, tasks: tasks});
            })
        })
    });
    
}

//function getTasks(req, res, next) {
//    Task.find({}, function(err, res) {
//        if (err) return res.send(500, { error: err });
//        res.status(200).json({tasks: res});
//    });
//}

function getInbox(req, res, next) {
    InboxItem.find({user: req.query.user}, function(err, inboxItems) {
        if (err) return res.send(500, { error: err });
        res.status(200).json({inboxItems: inboxItems});
    })
}

function acceptInvite(req, res, next) {
    
    InboxItem.find({user: req.body.user, }, function(err, inboxItems) {
        if (err) return res.send(500, { error: err });
        res.status(200).json({inboxItems: inboxItems});
    })
    
}

function createBudgets(req, res, next) {
    
}


function _createArchitectInvites(project, minRating) {
    
    User.find({primary: "Architect"}).where('rating').gte(minRating).exec(function(err, data) {
        console.log("Found users: " + data);
        for (var i = 0; i < data.length; i++) {
            new InboxItem({
                title: "Architecture for " + project.title,
                message: project.description,
                date: new Date(),
                read: false,
                user: data[i].username,
                deleted: false,
                active: false,
            }).save();
        }
    });
    
}

function _createDeveloperInvites() {
    
}

// Returns a list of all available technologies
function getTechnologies(req, res, next) {
    TechStack.find({}, function(err, data) {
        res.status(200)
           .json(data);
    });
}

module.exports = {
    
    // Model exports
    TechStack: TechStack,
    User: User,
    Task: Task,
    Project: Project,
    
    // Request exports
    getTechnologies: getTechnologies,
    upsertUser: upsertUser,
    createProject: createProject,
    getUser: getUser,
    addTask: addTask,
    getProjects: getProjects,
    getProject: getProject,
    getInbox: getInbox,
    
}