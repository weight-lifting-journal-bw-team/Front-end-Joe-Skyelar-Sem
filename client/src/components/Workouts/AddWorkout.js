import React, { Component } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import {
	toggleWorkoutModal,
	addWorkout,
	toggleAddWorkoutForm
} from "../../actions/workoutActions";

// Components
import AddExercise from "../ExerciseForm/AddExercise";

// Styles
import {
	FormInput,
	FormButton,
	FormTitle,
	FormWrapper,
	FormInputWrapper,
	FormInputLabel
} from "../styles/FormStyles";

class AddWorkout extends Component {
	state = {
		workout: {
			region: ""
		},
		styles: {
			overlay: {
				backgroundColor: "rgba(0, 0, 0, 0.25)"
			},
			content: {
				width: "400px",
				height: "560px",
				margin: "0 auto"
			}
		}
	};

	handleChanges = e => {
		this.setState({
			workout: {
				...this.state.workout,
				[e.target.name]: e.target.value
			}
		});
	};

	addWorkout = e => {
		e.preventDefault();

		this.props.addWorkout(this.state.workout, this.props.userId);

		this.props.toggleAddWorkoutForm();

		this.setState({
			workout: {
				...this.state.workout,
				region: ""
			}
		});
	};

	handleCloseModal = () => {
		this.props.toggleWorkoutModal();

		if (this.props.toggleAddExerciseValue) {
			this.props.toggleAddWorkoutForm();
		}
	};

	render() {
		return (
			<div>
				<WorkoutModal
					isOpen={this.props.toggleModalWorkoutValue}
					onRequestClose={this.handleCloseModal}
					style={this.state.styles}
				>
					{!this.props.toggleAddExerciseValue ? (
						<FormWrapper>
							<FormTitle>Add Workout</FormTitle>
							<form onSubmit={this.addWorkout}>
								<FormInputWrapper>
									<FormInputLabel>
										Body Region:
									</FormInputLabel>
									<FormInput
										type="text"
										value={this.state.workout.region}
										name="region"
										placeholder="Legs"
										onChange={this.handleChanges}
									/>
								</FormInputWrapper>
								<FormButton
									type="submit"
									disabled={!this.state.workout.region}
								>
									Add Exercises
								</FormButton>
							</form>
						</FormWrapper>
					) : (
						<AddExercise />
					)}
				</WorkoutModal>
			</div>
		);
	}
}
const mapStateToProps = ({ workoutReducer, authReducer }) => ({
	toggleModalWorkoutValue: workoutReducer.toggleWorkoutModal,
	toggleAddExerciseValue: workoutReducer.addExercise,
	userId: authReducer.currentUser
});
export default connect(
	mapStateToProps,
	{ toggleWorkoutModal, toggleAddWorkoutForm, addWorkout }
)(AddWorkout);
