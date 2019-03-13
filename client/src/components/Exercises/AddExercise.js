import React, { Component } from 'react'

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
            workout: {
                ...this.state.workout,
                [e.target.name]: e.target.value
            }
        });
    };
    
  render() {
    return (
      <div>
      <h1>Add exercise to w</h1>
        <form>
            <input 
                name="name"
                value={this.state.exercise.name}
                placeholder="Name"
                onChange={this.handleChanges} 
            />
            <input 
                name="reps"
                value={this.state.exercise.reps}
                placeholder="Reps" 
                onChange={this.handleChanges}
            />
            <input 
                name="sets"
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
            <button>Add Exercise</button>
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

export default AddExercise;