class UserPreview extends React.Components {
	render() {
		return(
			<div className="user-preview">
				<img src={this.props.image} />
				<div name="name-rating">
					<h1>{this.props.name}</h1>
					<p>{this.props.rating} /5</p>
				</div>
			</div>
		);
	}
}