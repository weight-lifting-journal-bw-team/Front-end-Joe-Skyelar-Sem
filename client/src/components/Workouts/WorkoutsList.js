import React, { Component } from 'react';
import { connect } from 'react-redux';

import Workout from './Workout';

class WorkoutsList extends Component {
  render() {
    return (
      <div>
        {/* maps over an array of workouts and return 5 most recent workouts (sort by workout id desc) */}
        <Workout 
        
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        something: null
    }
}

export default connect(
    mapStateToProps,
    {}
)(WorkoutsList);
