import React, { Component } from "react";
import { connect } from "react-redux";
import Workout from "./Workout";

import { WorkoutsListWrapper } from "./WorkoutStyles";

class WorkoutsList extends Component {
	render() {
		return (
			<WorkoutsListWrapper>
				{this.props.workouts.map(workout => (
					<Workout key={workout.id} {...workout} refreshWorkouts={this.props.refreshWorkouts}/>
				))}
			</WorkoutsListWrapper>
		);
	}
}

const mapStateToProps = ({ workoutReducer }) => ({
	workouts: workoutReducer.workouts
});

export default connect(
	mapStateToProps,
	{}
)(WorkoutsList);
