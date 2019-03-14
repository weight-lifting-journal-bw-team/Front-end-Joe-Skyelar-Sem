import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteWorkout, updateWorkout } from "../../actions/workoutActions";
import { fetchExercises } from "../../actions/exerciseActions";

import {
	WorkoutWrapper,
	WorkoutContainer,
	DropDownWrapper,
	WorkoutRegionHeader,
	EditButton,
	DeleteButton
} from "./WorkoutStyles";

import {
	SolidRoundBtn,
	RoundBtn,
	UnderlineFormInput
} from "../styles/FormStyles";

import ExerciseList from "../Exercises/ExerciseList";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
library.add([faTrashAlt, faPencilAlt]);

class Workout extends Component {
	state = {
		workoutToggle: false,
		isEditing: false,
		workout: {
			region: this.props.region
		}
	};

	toggleWorkout = () => {
		this.setState({
			workoutToggle: !this.state.workoutToggle
		});
	};

	updateWorkout = e => {
		this.props.updateWorkout(this.state.workout, this.props.id);

		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	deleteWorkout = e => {
		e.preventDefault();
		this.props.deleteWorkout(this.props.id);
	};

	handleChanges = e => {
		this.setState({
			workout: {
				...this.state.workout,
				[e.target.name]: e.target.value
			}
		});
	};

	handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	render() {
		return (
			<WorkoutWrapper>
				{!this.state.isEditing ? (
					<WorkoutContainer>
						<div>
							<WorkoutRegionHeader onClick={this.toggleWorkout}>
								{this.state.workout.region}
							</WorkoutRegionHeader>
						</div>
						<div>
							<EditButton onClick={this.handleEdit}>
								<FontAwesomeIcon
									icon={faPencilAlt}
									style={{ color: "#fff" }}
								/>
							</EditButton>
							<DeleteButton onClick={this.deleteWorkout}>
								<FontAwesomeIcon
									icon={faTrashAlt}
									style={{ color: "#fff" }}
								/>
							</DeleteButton>
						</div>
					</WorkoutContainer>
				) : (
					<WorkoutContainer>
						<div>
							<UnderlineFormInput
								type="text"
								name="region"
								value={this.state.workout.region}
								onChange={this.handleChanges}
							/>
						</div>
						<div>
							<RoundBtn onClick={this.handleEdit}>
								Cancel
							</RoundBtn>
							<SolidRoundBtn onClick={this.updateWorkout}>
								Update
							</SolidRoundBtn>
						</div>
					</WorkoutContainer>
				)}

				{this.state.workoutToggle && (
					<DropDownWrapper>
						<ExerciseList exercises={this.props.exercises} />
					</DropDownWrapper>
				)}
			</WorkoutWrapper>
		);
	}
}

const mapStateToProps = ({ exerciseReducer }) => {
	return {
		exercises: exerciseReducer.exercises
	};
};

export default connect(
	mapStateToProps,
	{ deleteWorkout, updateWorkout, fetchExercises }
)(Workout);
