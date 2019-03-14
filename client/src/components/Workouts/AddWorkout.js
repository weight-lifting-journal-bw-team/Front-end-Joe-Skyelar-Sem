import React, { Component } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import {
  toggleWorkoutModal,
  addWorkout,
  toggleAddWorkoutForm
} from "../../actions/workoutActions";

// Components
import AddExercise from "../Exercises/AddExercise"

const modalStyles = {
	content: {
		width: '500px',
		height: '800px',
		margin: '0 auto'
	}
}

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

    this.props.addWorkout(this.state.workout);

	this.props.toggleAddWorkoutForm()
	
	this.setState({
		workout: {
			...this.state.workout,
			region: ""
		}
	})
  };

  handleCloseModal = () => {
	this.props.toggleWorkoutModal()
	  this.props.toggleAddWorkoutForm()
  }

	render() {
    return (
      <div>
        <WorkoutModal
          isOpen={this.props.toggleModalWorkoutValue}
          onRequestClose={this.handleCloseModal}
          style={modalStyles}
        >
			{!this.props.toggleAddExerciseValue ? (
            <div>
              <h1>Add Workout</h1>
              <form onSubmit={this.addWorkout}>
                <input
                  type="text"
                  value={this.state.workout.region}
                  name="region"
                  placeholder="Body Region"
                  onChange={this.handleChanges}
                />
				<button type="submit">
                  Add Exercise
                </button>
              </form>
            </div>
          ) : (
            <AddExercise />
          )}
        </WorkoutModal>
      </div>
    );
  }
}
const mapStateToProps = ({ workoutReducer }) => ({
	toggleModalWorkoutValue: workoutReducer.toggleWorkoutModal,
	toggleAddExerciseValue: workoutReducer.addExercise
});
export default connect(
  mapStateToProps,
	{ toggleWorkoutModal, toggleAddWorkoutForm, addWorkout }
)(AddWorkout);
