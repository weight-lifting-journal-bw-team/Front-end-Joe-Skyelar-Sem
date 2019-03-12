import React, { Component, Fragment } from 'react'

class Workout extends Component {
  state = {
    workoutToggle: false
  }

  toggleWorkout = () => {
      this.setState({
          workoutToggle: !this.state.workoutToggle
      })
  }

  render() {
    return (
      <Fragment>
        This is a workout
        {/* This will have some conditional rendering - when the workoutToggle is false, it'll be a minimized view, else when true, this will be an expanded item */}
        <div
        onClick={this.toggleWorkout} 
        className="workout-container">
            <h1>Leg Day</h1>
            {this.state.workoutToggle && <div
            className="expanded-content"
            >  
                <img alt="workout-picture"/>
                <p>Current Weight</p>
                {/* map over to get these for each workout */}
                <p>Max Weight</p>
                <p>Sets</p>
                <p>Reps</p>
                {/* Exercise List */}
                {/* Add Exercise Form */}
            </div>}
        </div>
      </Fragment>
    )
  }
}

export default Workout;