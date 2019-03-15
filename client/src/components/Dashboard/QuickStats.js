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

		const statsWorkouts = this.props.workouts

		const regionsArray = statsWorkouts.map(workout => {
			return workout.region
		})
		
		let filteredRegionsArray = regionsArray.filter((region, i) => {
		return regionsArray.indexOf(region) === i;
		})
		
		function countInArray(array, region) {
			return array.filter(item => item === region).length
		}
		
		let countsArray = filteredRegionsArray.map(region => {
			return countInArray(regionsArray, region)
		})
		
		const groupedArray = filteredRegionsArray.map((region, i, array) => ({
			name: region,
			count: countInArray(regionsArray, region)
		  }))

		const sortedGroupedArray = groupedArray.sort((a,b) => {
			return b.count - a.count
		})  

		const totalWorkouts = countsArray.reduce((sum, element) => {return sum + element}, 0)

		return (
			<Fragment>
				<StatsContainer>
					<h3>Total workouts</h3>
					<h2>{totalWorkouts ? totalWorkouts : "Loading"}</h2>
				</StatsContainer>
				<StatsContainer2>
					<h3>Total Exercises</h3>
					<h2>45</h2>
				</StatsContainer2>
				<StatsContainer3>
					<h3>Body Region Worked out the most</h3>
					<h2>{sortedGroupedArray.length > 0 ? sortedGroupedArray[0].name : "Loading"}</h2>
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
