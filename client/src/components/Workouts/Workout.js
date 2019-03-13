import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteExercise } from "../../actions/exerciseActions";

class Workout extends Component {
	state = {
		workoutToggle: false
	};

	toggleWorkout = () => {
		this.setState({
			workoutToggle: !this.state.workoutToggle
		});
	};

	deleteExercise = e => {
		e.preventDefault();

		this.props.deleteExercise(this.props.workout_id);
	};

	render() {
		return (
			<Fragment>
				<div onClick={this.toggleWorkout} className="workout-container">
					Click this to expand this workout v
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

							<button onClick={this.deleteExercise}>
								Delete
							</button>
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
