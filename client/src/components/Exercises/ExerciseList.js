import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exerciseActions";

import Exercise from "./Exercise";

class ExerciseList extends Component {
	componentDidMount() {
		this.props.fetchExercises(this.props.workoutId);
	}

	render() {
		return (
			<div>
				{this.props.exercises.map(exercise => (
					<Exercise key={exercise.id} {...exercise} />
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ exerciseReducer }) => ({
	exercises: exerciseReducer.exercises
});

export default connect(
	mapStateToProps,
	{ fetchExercises }
)(ExerciseList);
