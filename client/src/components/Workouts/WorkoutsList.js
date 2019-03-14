import React, { Component } from "react";
import { connect } from "react-redux";
import Workout from "./Workout";

import { WorkoutsListWrapper } from "./WorkoutStyles";

import { fetchWorkouts } from "../../actions/workoutActions";

class WorkoutsList extends Component {
	componentDidMount() {
		this.props.fetchWorkouts();
	}

	render() {
		return (
			<WorkoutsListWrapper>
				{this.props.workouts.map(workout =>
					workout.userId === 1 ? (
						<Workout key={workout.id} {...workout} />
					) : null
				)}
			</WorkoutsListWrapper>
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
