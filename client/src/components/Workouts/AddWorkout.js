import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import { toggleWorkoutModal } from "../../actions/workoutActions";
import { addExercise } from "../../actions/exerciseActions";
class AddWorkout extends Component {
	state = {
		workout: {
			workoutName: "",
			workoutDate: Date.now().toString(),
			workoutType: "",
			workoutSubType: "",
			workoutSets: "",
			workoutReps: "",
			maxWeight: "",
			currentWeight: "",
			workoutTime: "",
			workoutDistance: "",
			workoutNotes: ""
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
	handleDropDownChanges = e => {
		this.setState({
			workout: {
				...this.state.workout,
				workoutType: e.target.value
			}
		});
	};
	addExercise = e => {
		e.preventDefault();
		this.props.addExercise(this.state.workout);
	};

	render() {
		return (
			<div>
				<WorkoutModal
					isOpen={this.props.toggleModalWorkoutValue}
					onRequestClose={this.props.toggleWorkoutModal}
				>
					<form onSubmit={this.addExercise}>
						{/* <input type="file" onChange={this.handleChanges} /> */}
						<input
							name="workoutName"
							value={this.state.workout.workoutName}
							placeholder="workout name"
							onChange={this.handleChanges}
						/>
						<select
							onChange={this.handleDropDownChanges}
							value={this.state.workout.workoutType}
						>
							<option value="select">select</option>
							<option value="cardio">Cardio</option>
							<option value="strength">Strength</option>
						</select>
						{this.state.workout.workoutType === "cardio" && (
							<Fragment>
								<input
									name="workoutTime"
									value={this.state.workout.workoutTime}
									placeholder="workout time"
									onChange={this.handleChanges}
								/>
								<input
									type="number"
									name="workoutDistance"
									value={this.state.workout.workoutDistance}
									placeholder="distance"
									onChange={this.handleChanges}
								/>
							</Fragment>
						)}
						{this.state.workout.workoutType === "strength" && (
							<Fragment>
								<input
									name="workoutSets"
									value={this.state.workout.workoutSets}
									type="number"
									placeholder="sets"
									onChange={this.handleChanges}
								/>
								<input
									name="workoutReps"
									value={this.state.workout.workoutReps}
									type="number"
									placeholder="reps"
									onChange={this.handleChanges}
								/>
								<input
									name="workoutTime"
									value={this.state.workout.workoutTime}
									placeholder="workout time"
									onChange={this.handleChanges}
								/>
							</Fragment>
						)}
						<textarea
							// workout notes
							name="workoutNotes"
							value={this.state.workout.workoutNotes}
							placeholder="Notes"
							onChange={this.handleChanges}
						/>
						<button type="submit">Add exercise</button>
					</form>
				</WorkoutModal>
			</div>
		);
	}
}
const mapStateToProps = ({ workoutReducer }) => ({
	toggleModalWorkoutValue: workoutReducer.toggleWorkoutModal
});
export default connect(
	mapStateToProps,
	{ toggleWorkoutModal, addExercise }
)(AddWorkout);
