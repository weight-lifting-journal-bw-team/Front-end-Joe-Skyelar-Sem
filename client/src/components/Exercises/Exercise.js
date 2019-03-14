import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { deleteExercise, updateExercise } from "../../actions/exerciseActions";

import { TableRowWrapper, TableDataWrapper } from "./ExerciseStyles";

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
			<TableRowWrapper>
				{!this.state.isEditing ? (
					<Fragment>
						<TableDataWrapper>
							{this.state.exercise.name}
						</TableDataWrapper>
						<TableDataWrapper>
							{this.state.exercise.sets}
						</TableDataWrapper>
						<TableDataWrapper>
							{this.state.exercise.reps}
						</TableDataWrapper>
						<TableDataWrapper>
							{this.state.exercise.weight}
						</TableDataWrapper>
						<TableDataWrapper />
						<TableDataWrapper>
							<button onClick={this.handleEdit}>Edit</button>
							<button onClick={this.deleteExercise}>
								Delete
							</button>
						</TableDataWrapper>
					</Fragment>
				) : (
					<Fragment>
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
					</Fragment>
				)}
			</TableRowWrapper>
		);
	}
}

export default connect(
	null,
	{ deleteExercise, updateExercise }
)(Exercise);
