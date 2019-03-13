import React, { Component } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import { toggleWorkoutModal, addWorkout } from "../../actions/workoutActions";

// Components
import AddExercise from "../Exercises/AddExercise"

class AddWorkout extends Component {
	state = {
		workout: {
			region: ""
		},
		addExercise: false
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

		this.setState({
			addExercise: !this.state.addExercise
		})
	};

	render() {
		return (
      <div>
        <WorkoutModal
          isOpen={this.props.toggleModalWorkoutValue}
          onRequestClose={this.props.toggleWorkoutModal}
        >
			{!this.state.addExercise ? <div><h1>Add Workout</h1>
				<form onSubmit={this.addWorkout}>
					<input
						type="text"
						value={this.state.workout.region}
						name="region"
						placeholder="Body Region"
						onChange={this.handleChanges}
					/>
					<button
						type="submit"
						onClick={this.addExercise}
					>
						Add Exercise
					</button>
				</form>
			</div> :
			 <AddExercise />
			}
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
