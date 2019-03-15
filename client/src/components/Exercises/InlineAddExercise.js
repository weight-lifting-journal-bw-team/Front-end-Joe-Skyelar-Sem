import React, { Component } from "react";
import { connect } from "react-redux";

import {
	TableRowWrapper,
	TableDataWrapper,
	InlineInput,
	InlineButon
} from "./ExerciseStyles";

import { addExercise } from "../../actions/exerciseActions";

class InlineAddExercise extends Component {
	state = {
		exercise: {
			name: "",
			reps: "",
			sets: "",
			weight: ""
		}
	};

	handleChanges = e => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[e.target.name]: e.target.value
			}
		});
	};

	handleAddExercise = e => {
		e.preventDefault();

		this.props.addExercise(
			this.state.exercise,
			this.props.workoutId,
			this.props.userId
		);

		this.setState({
			exercise: {
				...this.state.exercise,
				name: "",
				reps: "",
				sets: "",
				weight: ""
			}
		});
	};

	render() {
		return (
			<TableRowWrapper>
				<TableDataWrapper>
					<InlineInput
						name="name"
						value={this.state.exercise.name}
						placeholder="Deadlift"
						onChange={this.handleChanges}
					/>
				</TableDataWrapper>
				<TableDataWrapper>
					<InlineInput
						name="sets"
						type="number"
						value={this.state.exercise.sets}
						placeholder="25"
						onChange={this.handleChanges}
					/>
				</TableDataWrapper>
				<TableDataWrapper>
					<InlineInput
						type="number"
						name="reps"
						value={this.state.exercise.reps}
						placeholder="10"
						onChange={this.handleChanges}
					/>
				</TableDataWrapper>
				<TableDataWrapper>
					<InlineInput
						name="weight"
						value={this.state.exercise.weight}
						placeholder="450 lbs"
						onChange={this.handleChanges}
					/>
				</TableDataWrapper>
				<TableDataWrapper />
				<TableDataWrapper>
					<InlineButon onClick={this.handleAddExercise}>
						Add Exercise
					</InlineButon>
				</TableDataWrapper>
			</TableRowWrapper>
		);
	}
}

const mapStateToProps = ({ authReducer }) => {
	return {
		userId: authReducer.currentUserId
	};
};

export default connect(
	mapStateToProps,
	{ addExercise }
)(InlineAddExercise);
