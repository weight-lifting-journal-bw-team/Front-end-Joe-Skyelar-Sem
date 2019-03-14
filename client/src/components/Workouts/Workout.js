import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteWorkout } from "../../actions/workoutActions";

import { WorkoutWrapper, DropDownWrapper } from "./WorkoutStyles";

import ExerciseList from "../Exercises/ExerciseList";

class Workout extends Component {
	state = {
		workoutToggle: false,
		editingWorkout: false,
		workout: {
			region: this.props.region
		}
	};

	toggleWorkout = () => {
		this.setState({
			workoutToggle: !this.state.workoutToggle
		});
	};

	// updateWorkout

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

	render() {
		return (
			<Fragment>
				{/*

					Render region name
					<ExerciseList />
						<Exercise />
				*/}
				<WorkoutWrapper>
					{/* {editingWorkout ? } */}
					<div onClick={this.toggleWorkout}>
						<h1>{this.props.region}</h1>
					</div>
					<div>
						<button>Update Workout</button>
						<button onClick={this.deleteWorkout}>
							Delete Workout
						</button>
					</div>
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
	{ deleteWorkout }
)(Workout);
