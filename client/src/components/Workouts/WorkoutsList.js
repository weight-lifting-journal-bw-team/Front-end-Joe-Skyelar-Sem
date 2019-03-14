import React, { Component } from "react";
import { connect } from "react-redux";
import Workout from "./Workout";

import { fetchWorkouts } from "../../actions/workoutActions";

class WorkoutsList extends Component {
	componentDidMount() {
		this.props.fetchWorkouts();
	}

	render() {
		return (
			<div>
				{this.props.workouts.map(workout =>
					workout.userId === 1 ? (
						<Workout key={workout.id} {...workout} />
					) : null
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ workoutReducer }) => ({
	workouts: workoutReducer.workouts
});

export default connect(
	mapStateToProps,
	{ fetchWorkouts }
)(WorkoutsList);
