import React, { Component } from "react";

// Layout components
import Navigation from "../Layout/Navigation";
import WorkoutsList from "../Workouts/WorkoutsList";

import AddWorkout from "../Workouts/AddWorkout";

class Home extends Component {
	render() {
		return (
			<div>
				<Navigation history={this.props.history} />
				<h2>Dashboard</h2>
				<h2>Stats</h2>
				<h2>Chart</h2>
				<AddWorkout />
				<WorkoutsList />
			</div>
		);
	}
}

export default Home;
