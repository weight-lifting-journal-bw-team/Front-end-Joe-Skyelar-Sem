import React, { Component } from "react";
import { connect } from "react-redux";

import ExerciseList from "./FormExerciseList";

import {
	FormInput,
	FormButton,
	FormTitle,
	FormWrapper,
	FormInputWrapper,
	FormInputLabel
} from "../styles/FormStyles";

import { addExercise } from "../../actions/exerciseActions";

class AddExercise extends Component {
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
			<FormWrapper>
				<FormTitle>Add exercise to workout</FormTitle>
				<form onSubmit={this.handleAddExercise}>
					<FormInputWrapper>
						<FormInputLabel>Exercise name:</FormInputLabel>
						<FormInput
							name="name"
							value={this.state.exercise.name}
							placeholder="Deadlift"
							onChange={this.handleChanges}
						/>
					</FormInputWrapper>
					<FormInputWrapper>
						<FormInputLabel>Sets:</FormInputLabel>
						<FormInput
							name="sets"
							type="number"
							value={this.state.exercise.sets}
							placeholder="25"
							onChange={this.handleChanges}
						/>
					</FormInputWrapper>
					<FormInputWrapper>
						<FormInputLabel>Reps:</FormInputLabel>
						<FormInput
							type="number"
							name="reps"
							value={this.state.exercise.reps}
							placeholder="10"
							onChange={this.handleChanges}
						/>
					</FormInputWrapper>
					<FormInputWrapper>
						<FormInputLabel>Max Weight:</FormInputLabel>
						<FormInput
							name="weight"
							value={this.state.exercise.weight}
							placeholder="450 lbs"
							onChange={this.handleChanges}
						/>
					</FormInputWrapper>
					<FormButton type="submit">Add Exercise</FormButton>
					{/*
                On submit exercise will be added to journal by id
                and added to a list of exercises
                current component sate will reset allowing user to add in a new exercise
            */}
				</form>
			</FormWrapper>
		);
	}
}

const mapStateToProps = ({ workoutReducer, authReducer }) => {
	return {
		workoutId: workoutReducer.workoutId,
		userId: authReducer.currentUser
	};
};

export default connect(
	mapStateToProps,
	{ addExercise }
)(AddExercise);
