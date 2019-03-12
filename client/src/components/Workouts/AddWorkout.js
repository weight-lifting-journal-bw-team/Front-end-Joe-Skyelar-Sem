// On CDM for edit form, pull user information out and map it to

// if editing is true, mount the form with the data pre-filled and conditionally render the input fields

// Also make sure to conditionally change the action creator

// Add a new workout
// User clicks the button
// Modal pops up
// The modal will have a form with input fields/ drop-down input
// When form is submitted, the POST request will fire

// Edit an existing workout
// User clicks on a workout -- or there is an edit button
// User click edit
// Modal pops up (modal is the form component)
// The modal will have same form in terms of style as add form, but the input fields/ drop-down input will be pre-populated
// --> conditionally render the title and submit button
// --> conditionally change the request
// When form is submitted, the PUT request will fire
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import { toggleWorkoutModal } from "../../actions/workoutActions";

class AddWorkout extends Component {
	state = {
		workout: {
			workoutName: "",
			workoutDate: Date.now(),
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

	render() {
		return (
			<div>
				<WorkoutModal
					isOpen={this.props.toggleModalWorkoutValue}
					onRequestClose={this.props.toggleWorkoutModal}
				>
					<form>
						<input type="file" onChange={this.handleChanges} />
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
	{ toggleWorkoutModal }
)(AddWorkout);
