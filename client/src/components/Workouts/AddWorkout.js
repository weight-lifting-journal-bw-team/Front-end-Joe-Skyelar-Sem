import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import { toggleWorkoutModal, addWorkout } from "../../actions/workoutActions";

class AddWorkout extends Component {
	state = {
		workout: {
			region: ""
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

		this.props.addWorkout(this.state.workout)
	};

	render() {
		return (
			<div>
				<WorkoutModal
				isOpen={this.props.toggleModalWorkoutValue}
				onRequestClose={this.props.toggleWorkoutModal}
				>
				<form onSubmit={this.addWorkout}>
						<input
							type="text"
							value={this.state.workout.region}
							name="region"
							placeholder="Body Region"
							onChange={this.handleChanges}
						/>
						<button type="submit">Add Exercise</button>
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
	{ toggleWorkoutModal, addWorkout }
)(AddWorkout);
