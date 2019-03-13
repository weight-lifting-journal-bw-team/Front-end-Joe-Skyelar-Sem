import React, { Component } from "react";
import { connect } from "react-redux";
import Workout from "./Workout";

import { fetchExercises } from "../../actions/exerciseActions";

class WorkoutsList extends Component {
	componentDidMount() {
		this.props.fetchExercises();
	}

	render() {
		return (
			<div>
				{this.props.exercises.map((exercise, i) => (
					<Workout key={exercise.workout_id} {...exercise} />
				))}
				{console.log(this.props.exercises)}
			</div>
		);
	}
}

const mapStateToProps = ({ exerciseReducer }) => {
	return {
		exercises: exerciseReducer.exercises
	};
};

export default connect(
	mapStateToProps,
	{ fetchExercises }
)(WorkoutsList);
