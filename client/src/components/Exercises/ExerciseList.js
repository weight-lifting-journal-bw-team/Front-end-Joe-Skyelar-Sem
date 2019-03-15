import React, { Component } from "react";
import { connect } from "react-redux";

import Exercise from "./Exercise";
import InlineAddExercise from "./InlineAddExercise";

import {
	TableWrapper,
	TableRowWrapper,
	TableHeaderWrapper
} from "./ExerciseStyles";

class ExerciseList extends Component {
	render() {
		return (
			<TableWrapper>
				<TableRowWrapper>
					<TableHeaderWrapper>Name:</TableHeaderWrapper>
					<TableHeaderWrapper>Sets:</TableHeaderWrapper>
					<TableHeaderWrapper>Reps:</TableHeaderWrapper>
					<TableHeaderWrapper>Weight:</TableHeaderWrapper>
				</TableRowWrapper>
				{this.props.exercises.map(exercise => (
					<Exercise key={exercise.id} {...exercise} refreshWorkouts={this.props.refreshWorkouts}/>
				))}
				<InlineAddExercise workoutId={this.props.workoutId} />
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
