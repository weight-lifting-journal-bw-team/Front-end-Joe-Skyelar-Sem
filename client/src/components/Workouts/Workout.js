import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteWorkout, updateWorkout } from "../../actions/workoutActions";

import { WorkoutWrapper, DropDownWrapper } from "./WorkoutStyles";

import ExerciseList from "../Exercises/ExerciseList";

class Workout extends Component {
	state = {
		workoutToggle: false,
		isEditing: false,
		workout: {
			region: this.props.region
		}
	};

	toggleWorkout = () => {
		this.setState({
			workoutToggle: !this.state.workoutToggle
		});
	};

	updateWorkout = e => {
		this.props.updateWorkout(this.state.workout, this.props.id);

		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	deleteWorkout = e => {
		e.preventDefault();
		this.props.deleteWorkout(this.props.id);
	};

	handleChanges = e => {
		this.setState({
			workout: {
				...this.state.workout,
				[e.target.name]: e.target.value
			}
		});
	};

	handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	render() {
		return (
			<Fragment>
				{/*

					Render region name
					<ExerciseList />
						<Exercise />
				*/}
				<WorkoutWrapper>
					<div>
						{!this.state.isEditing ? (
							<div>
								<h1 onClick={this.toggleWorkout}>
									{this.state.workout.region}
								</h1>
								<button onClick={this.handleEdit}>
									Edit Workout
								</button>
								<button onClick={this.deleteWorkout}>
									Delete Workout
								</button>
							</div>
						) : (
							<div>
								<input
									type="text"
									name="region"
									value={this.state.workout.region}
									onChange={this.handleChanges}
								/>
								<button onClick={this.updateWorkout}>
									Update
								</button>
								<button onClick={this.handleEdit}>
									Cancel
								</button>
							</div>
						)}
					</div>
					<div />
				</WorkoutWrapper>
				{this.state.workoutToggle && (
					<DropDownWrapper>
						<ExerciseList workoutId={this.props.id} />
					</DropDownWrapper>
				)}
			</Fragment>
		);
	}
}

export default connect(
	null,
	{ deleteWorkout, updateWorkout }
)(Workout);
