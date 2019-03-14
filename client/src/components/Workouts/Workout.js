import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteExercise, updateExercise } from "../../actions/exerciseActions";

class Workout extends Component {
	state = {
		workoutToggle: false,
		editExercise: false
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
				<div onClick={this.toggleWorkout}>
					<h1>{this.props.region}</h1>
					{this.state.workoutToggle && <div>Exercises</div>}
				</div>
			</Fragment>
		);
	}
}

export default connect(
	null,
	{}
)(Workout);
