import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteExercise, updateExercise } from "../../actions/exerciseActions";

class Exercise extends Component {
	state = {
		exercise: {
			name: this.props.name,
			sets: this.props.sets,
			reps: this.props.reps,
			weight: this.props.weight
		},
		isEditing: false
	};

	deleteExercise = e => {
		e.preventDefault();
		this.props.deleteExercise(this.props.id);
	};

	updateExercise = e => {
		e.preventDefault();
		this.props.updateExercise(this.state.exercise, this.props.id);

		this.setState({ isEditing: !this.state.isEditing });
	};

	handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	handleChanges = e => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[e.target.name]: e.target.value
			}
		});
	};

	render() {
		return (
			<div>
				{!this.state.isEditing ? (
					<div>
						{" "}
						<div>
							<h1>name: {this.state.exercise.name}</h1>
						</div>
						<div>
							<p>sets: {this.state.exercise.sets}</p>
							<p>reps: {this.state.exercise.reps}</p>
							<p>weight: {this.state.exercise.weight}</p>
						</div>
						<div>
							<button onClick={this.handleEdit}>Edit</button>
							<button onClick={this.deleteExercise}>
								Delete
							</button>
						</div>
					</div>
				) : (
					<div>
						<input
							type="text"
							name="name"
							value={this.state.exercise.name}
							placeholder="name"
							onChange={this.handleChanges}
						/>
						<input
							type="text"
							name="sets"
							value={this.state.exercise.sets}
							placeholder="sets"
							onChange={this.handleChanges}
						/>
						<input
							type="text"
							name="reps"
							value={this.state.exercise.reps}
							placeholder="reps"
							onChange={this.handleChanges}
						/>
						<input
							type="text"
							name="weight"
							value={this.state.exercise.weight}
							placeholder="max weight"
							onChange={this.handleChanges}
						/>
						<button onClick={this.updateExercise}>
							Update exercise
						</button>
						<button onClick={this.handleEdit}>Cancel</button>
					</div>
				)}
			</div>
		);
	}
}

export default connect(
	null,
	{ deleteExercise, updateExercise }
)(Exercise);
