import React, { Component } from "react";

// Layout components
import Navigation from "../Layout/Navigation";

class Home extends Component {
	render() {
		return (
			<div>
				<Navigation history={this.props.history}/>
				<h1>Home page</h1>
			</div>
		);
	}
}

export default Home;
