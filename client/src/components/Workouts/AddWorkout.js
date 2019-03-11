// On CDM for edit form, pull user information out and map it to 

// if editing is true, mount the form with the data pre-filled and conditionally render the input fields

// Also make sure to conditionally change the action creator

// Add a new workout
    // User clicks the button
    // Modal pops up
    // The modal will have a form with input fields/ drop-down input
    // When form is submitted, the POST request will fire

// Edit an existing workout
    // User clicks on a workout -- or there is an edit button
    // User click edit
    // Modal pops up (modal is the form component)
    // The modal will have same form in terms of style as add form, but the input fields/ drop-down input will be pre-populated
    // --> conditionally render the title and submit button
    // --> conditionally change the request
    // When form is submitted, the PUT request will fire
    import React, { Component } from 'react';
    import {connect} from 'react-redux';
    import WorkoutModal from 'react-modal';  
    import {toggleWorkoutModal} from '../../actions/workoutActions';
    
    
    class AddWorkout extends Component {        
       
      render() {
        return (
          <div>
              {/* {console.log(this.props.toggleWorkoutModal)} */}
              <WorkoutModal
              isOpen={this.props.toggleModalWorkoutValue}
              onRequestClose={this.props.toggleWorkoutModal}
               >Hello I'm working</WorkoutModal>

            
          </div>
        )
      }
    }

    const mapStateToProps = ({workoutReducer}) => ({        
        toggleModalWorkoutValue: workoutReducer.toggleWorkoutModal
    })

    export default connect(mapStateToProps, {toggleWorkoutModal})(AddWorkout);
    