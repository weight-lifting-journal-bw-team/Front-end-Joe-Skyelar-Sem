import React, { Component } from "react";

// Layout components
import Navigation from "../Layout/Navigation";

import AddWorkout from '../Workouts/AddWorkout';

class Home extends Component {
	render() {
		return (
			<div>
				<Navigation history={this.props.history}/>
				<h1>Home page</h1>
				<h3>Add Workout</h3>
				<h3>Welcome,</h3>
				<h2>Dashboard</h2>
				<h2>Stats</h2>
				<h2>Chart</h2>
				<AddWorkout />
			</div>
		);
	}
}

export default Home;
