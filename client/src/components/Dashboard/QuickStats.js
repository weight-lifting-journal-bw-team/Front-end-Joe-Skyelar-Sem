import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
	StatsContainer,
	StatsContainer2,
	StatsContainer3,
	StatsContainer4
} from "./DashboardStyles";

class QuickStats extends Component {
	render() {
		return (
			<Fragment>
				<StatsContainer>
					<h3>Total workouts</h3>
					<h2>20</h2>
				</StatsContainer>
				<StatsContainer2>
					<h3>Total Exercises</h3>
					<h2>45</h2>
				</StatsContainer2>
				<StatsContainer3>
					<h3>Body Region Worked out the most</h3>
					<h2>Chest</h2>
				</StatsContainer3>
				<StatsContainer4>
					<h3>Max Weight Lifted</h3>
					<h2>500 lbs</h2>
				</StatsContainer4>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ workoutReducer }) => ({
	workouts: workoutReducer.workouts
});

export default connect(
	mapStateToProps,
	{}
)(QuickStats);
