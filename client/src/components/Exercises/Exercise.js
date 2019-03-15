import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { deleteExercise, updateExercise } from "../../actions/exerciseActions";

import { TableRowWrapper, TableDataWrapper } from "./ExerciseStyles";
import { EditButton, DeleteButton } from "../Workouts/WorkoutStyles";
import { InlineInput } from "./ExerciseStyles";
import { SolidRoundBtn, RoundBtn } from "../styles/FormStyles";

library.add([faTrashAlt, faPencilAlt]);

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
		this.props.refreshWorkouts()
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
							<EditButton onClick={this.handleEdit}>
								<FontAwesomeIcon
									icon={faPencilAlt}
									style={{ color: "#fff" }}
								/>
							</EditButton>
							<DeleteButton onClick={this.deleteExercise}>
								<FontAwesomeIcon
									icon={faTrashAlt}
									style={{ color: "#fff" }}
								/>
							</DeleteButton>
						</TableDataWrapper>
					</Fragment>
				) : (
					<Fragment>
						<TableDataWrapper>
						<InlineInput
							type="text"
							name="name"
							value={this.state.exercise.name}
							placeholder="name"
							onChange={this.handleChanges}
						/>
						</TableDataWrapper>
						<TableDataWrapper>
						<InlineInput
							type="text"
							name="sets"
							value={this.state.exercise.sets}
							placeholder="sets"
							onChange={this.handleChanges}
						/>
						</TableDataWrapper>
						<TableDataWrapper>
						<InlineInput
							type="text"
							name="reps"
							value={this.state.exercise.reps}
							placeholder="reps"
							onChange={this.handleChanges}
						/>
						</TableDataWrapper>
						<TableDataWrapper>
						<InlineInput
							type="text"
							name="weight"
							value={this.state.exercise.weight}
							placeholder="max weight"
							onChange={this.handleChanges}
						/>
						</TableDataWrapper>
						<TableDataWrapper></TableDataWrapper>
						<TableDataWrapper>
						<SolidRoundBtn onClick={this.handleEdit}>
							Cancel
						</SolidRoundBtn>
						<RoundBtn onClick={this.updateExercise}>
							Update exercise
						</RoundBtn>
						</TableDataWrapper>
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
