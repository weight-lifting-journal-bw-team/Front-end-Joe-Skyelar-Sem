import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExerciseList extends Component {

    render() {
    return (
      <div>
      {this.props.exercises.map(exercise => exercise.journalId === this.props.journalId ? <p key={exercise.journalId}>{exercise.name}</p> : null)}
      </div>
    )
  }
}

const mapStateToProps = ({exerciseReducer, workoutReducer}) => {
    return {
        exercises: exerciseReducer.exercises,
        journalId: workoutReducer.workoutId
    }
}

export default connect(
    mapStateToProps,
    { }
)(ExerciseList)