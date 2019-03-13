import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WorkoutModal from "react-modal";
import { toggleWorkoutModal } from "../../actions/workoutActions";

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

	// addExercise = e => {
		
	// };

	render() {
		return (
      <div>
        <WorkoutModal
          isOpen={this.props.toggleModalWorkoutValue}
          onRequestClose={this.props.toggleWorkoutModal}
        >
          <input
            type="text"
            value={this.state.workout.region}
            name="region"
            placeholder="Body Region"
            onChange={this.handleChanges}
          />
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
