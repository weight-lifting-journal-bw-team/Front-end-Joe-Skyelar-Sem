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
			currentWeight: "",
			workoutTime: "",
			workoutNotes: ""
		},
		addExercise: true
	};

	handleChanges = e => {
		this.setState({
			workout: {
				...this.state.workout,
				[e.target.name]: e.target.value
			}
		});
	};

	// handleDropDownChanges = e => {
	// 	this.setState({
	// 		workout: {
	// 			...this.state.workout,
	// 			workoutType: e.target.value
	// 		}
	// 	});
	// };

	render() {
		return (
			<div>
				{/* {console.log(this.props.toggleWorkoutModal)} */}
				<WorkoutModal
					isOpen={this.props.toggleModalWorkoutValue}
					onRequestClose={this.props.toggleWorkoutModal}
				>
					{!this.state.addExercise && (
						<form
						// onSubmit=this will send the workout to the database
						>
							<input
								// progress picture
								type="file"
							/>

							<input
								// workout name
								name="workoutName"
								value={this.state.workout.workoutName}
								placeholder="workout name"
								onChange={this.handleChanges}
							/>

							<input
								// workout name
								name="currentWeight"
								value={this.state.workout.currentWeight}
								placeholder="current weight"
								onChange={this.handleChanges}
							/>
							<button>Add Workout</button>
							{/*
						<textarea
							// workout notes
							name="workoutNotes"
							value={this.state.workout.workoutNotes}
							placeholder="Notes"
							onChange={this.handleChanges}
						/>
						<input
							name="workoutTime"
							value={this.state.workout.workoutTime}
							placeholder="workout time"
							onChange={this.handleChanges}
						/> */}
						</form>
					)}

					{this.state.addExercise && (
						<form>
							<input
								type="text"
								name="exerciseName"
								placeholder="exercise name"
							/>

							{/* turn into dropdown */}
							<input
								type="text"
								name="exerciseRegion"
								placeholder="time spent on exercise"
							/>

							<input
								type="text"
								name="exerciseSets"
								placeholder="exercise sets"
							/>
							<input
								type="text"
								name="exerciseReps"
								placeholder="exercise reps"
							/>

							<input
								type="text"
								name="exerciseWeight"
								placeholder="Max weight lifted"
							/>

							<input
								type="text"
								name="exerciseTime"
								placeholder="time spent on exercise"
							/>

							<textarea
								type="text"
								name="exerciseNotes"
								placeholder="time spent on exercise"
							/>
							<input type="text" placeholder="exercise reps" />
							<button>Add Exercise</button>
						</form>
					)}
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
