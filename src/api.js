const express = require('express')

// Various module imports
const database = require('./database');

var router = express.Router();

// Basic routes
router.get('/technologies', database.getTechnologies);
router.post('/user', database.upsertUser);
router.post('/project', database.createProject);
router.get('/user', database.getUser);
router.post('/task', database.addTask);
router.get('/projects', database.getProjects);
router.get('/project', database.getProject);
//router.get('/tasks', database.getTasks);
router.get('/inbox', database.getInbox);
           
module.exports = router;