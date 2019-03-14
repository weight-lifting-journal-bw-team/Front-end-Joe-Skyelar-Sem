import React, { Component } from "react";

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
	};

	updateExercise = e => {
		e.preventDefault();
	};

	handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	handleChanges = e => {
		this.setState({
			...this.state.exercise,
			[e.target.name]: e.target.value
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
							<button>Delete</button>
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
						<button>Update exercise</button>
						<button onClick={this.handleEdit}>Cancel</button>
					</div>
				)}
			</div>
		);
	}
}

export default Exercise;
