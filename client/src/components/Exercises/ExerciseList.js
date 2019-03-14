import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exerciseActions";

import Exercise from "./Exercise";
import InlineAddExercise from "./InlineAddExercise";

import {
	TableWrapper,
	TableRowWrapper,
	TableHeaderWrapper
} from "./ExerciseStyles";

class ExerciseList extends Component {
	// componentDidMount() {
	// 	this.props.fetchExercises(this.props.workoutId);
	// }

	render() {
		return (
			<TableWrapper>
				<TableRowWrapper>
					<TableHeaderWrapper>Name</TableHeaderWrapper>
					<TableHeaderWrapper>Sets</TableHeaderWrapper>
					<TableHeaderWrapper>Reps</TableHeaderWrapper>
					<TableHeaderWrapper>Weight</TableHeaderWrapper>
				</TableRowWrapper>
				{this.props.exercises.map(exercise => (
					<Exercise key={exercise.id} {...exercise} />
				))}
				<InlineAddExercise />
			</TableWrapper>
		);
	}
}

// const mapStateToProps = ({ exerciseReducer }) => ({
// 	exercises: exerciseReducer.exercises
// });

export default connect(
	null,
	{}
)(ExerciseList);
