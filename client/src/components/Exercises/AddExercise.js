import React, { Component } from 'react'
import { connect } from 'react-redux';

import ExerciseList from "./ExerciseList"

import {addExercise} from '../../actions/exerciseActions'

class AddExercise extends Component {
    state = {
        exercise: {
            name: "",
            reps: "",
            sets: "",
            weight: ""
        }
    }

    handleChanges = e => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [e.target.name]: e.target.value
            }
        });
    };

    handleAddExercise = e => {
        e.preventDefault()

        this.props.addExercise(this.state.exercise, this.props.workoutId);

        this.setState({
            exercise: {
                ...this.state.exercise,
                name: "",
                reps: "",
                sets: "",
                weight: ""
            }
        })
    }
    
  render() {
    return (
      <div>
      <h1>Add exercise to workout</h1>
        <ExerciseList />
        <form onSubmit={this.handleAddExercise}>
            <input 
                name="name"
                value={this.state.exercise.name}
                placeholder="Name"
                onChange={this.handleChanges} 
            />
            <input 
                type="number"
                name="reps"
                value={this.state.exercise.reps}
                placeholder="Reps" 
                onChange={this.handleChanges}
            />
            <input 
                name="sets"
                type="number"
                value={this.state.exercise.sets} 
                placeholder="Sets" 
                onChange={this.handleChanges}
            />
            <input 
                name="weight"
                value={this.state.exercise.weight}
                placeholder="Weight" 
                onChange={this.handleChanges}
            />
            <button type="submit">Add Exercise</button>
            {/* 
                On submit exercise will be added to journal by id
                and added to a list of exercises
                current component sate will reset allowing user to add in a new exercise
            */}
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ workoutReducer, exerciseReducer }) => {
    return {
        workoutId: workoutReducer.workoutId
    }
}

export default connect(
    mapStateToProps,
    { addExercise }
)(AddExercise);