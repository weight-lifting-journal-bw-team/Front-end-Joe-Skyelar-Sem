import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteExercise } from "../../actions/exerciseActions";

class Workout extends Component {
	state = {
		workoutToggle: false,
		editExercise: false,
		workout: {
			workoutName: this.props.workout_name,
			workoutType: this.props.workout_type,
			workoutSubType: this.props.workout_subtype,
			workoutSets: this.props.workout_set,
			workoutReps: this.props.workout_reps,
			maxWeight: this.props.max_weight,
			currentWeight: this.props.current_weight,
			workoutTime: this.props.workout_time,
			workoutDistance: this.props.workout_distance,
			workoutNotes: this.props.workout_notes
		}
	};

	toggleWorkout = () => {
		this.setState({
			workoutToggle: !this.state.workoutToggle
		});
	};

	editExercise = e => {
		this.setState({
			editExercise: !this.state.editExercise
		});
	};

	showExercise = e => {
		this.setState({
			editExercise: !this.state.editExercise
		});
	};

	deleteExercise = e => {
		e.preventDefault();

		this.props.deleteExercise(this.props.workout_id);
	};

	handleChanges = e => {
		this.setState({
			workout: {
				...this.state.workout,
				[e.target.name]: e.target.value
			}
		});
	};

	render() {
		return (
			<Fragment>
				<div onClick={this.toggleWorkout} className="workout-container">
					{!this.state.editExercise ? (
						<div>
							{" "}
							<h1>{this.props.workout_name}</h1>
							{this.state.workoutToggle && (
								<div className="expanded-content">
									<img src={this.props.progress_picture} />
									<p>{this.props.current_weight}</p>
									<p>{this.props.max_weight}</p>
									<p>{this.props.workout_sets}</p>
									<p>{this.props.workout_reps}</p>
									<p>{this.props.body_region}</p>
									<p>{this.props.workout_distance}</p>
									<p>{this.props.workout_notes}</p>
									<p>{this.props.workout_time}</p>
									<p>{this.props.workout_type}</p>

									<button onClick={this.editExercise}>
										Edit
									</button>

									<button onClick={this.deleteExercise}>
										Delete
									</button>
								</div>
							)}
						</div>
					) : (
						<div>
							<input
								type="text"
								name="workoutName"
								value={this.state.workout.workoutName}
								onChange={this.handleChanges}
							/>

							<input
								type="text"
								name="currentWeight"
								value={this.state.workout.currentWeight}
								onChange={this.handleChanges}
							/>

							<input
								type="number"
								name="maxWeight"
								value={this.state.workout.maxWeight}
								onChange={this.handleChanges}
							/>

							<input
								type="text"
								name="workoutSets"
								value={this.state.workout.workoutSets}
								onChange={this.handleChanges}
							/>

							<input
								type="text"
								name="workoutReps"
								value={this.state.workout.workoutReps}
								onChange={this.handleChanges}
							/>
							<input
								type="text"
								name="bodyRegion"
								value={this.state.workout.bodyRegion}
								onChange={this.handleChanges}
							/>

							<textarea
								type="text"
								name="workoutNotes"
								value={this.state.workout.workoutNotes}
								onChange={this.handleChanges}
							/>

							<input
								type="text"
								name="workoutTime"
								value={this.state.workout.workoutTime}
								onChange={this.handleChanges}
							/>

							<input
								type="text"
								name="workoutDistance"
								value={this.state.workout.workoutDistance}
								onChange={this.handleChanges}
							/>

							<input
								type="text"
								name="workoutType"
								value={this.state.workout.workoutType}
								onChange={this.handleChanges}
							/>

							<button>Update Exercise</button>

							<button onClick={this.showExercise}>Back</button>
						</div>
					)}
				</div>
			</Fragment>
		);
	}
}

export default connect(
	null,
	{ deleteExercise }
)(Workout);
