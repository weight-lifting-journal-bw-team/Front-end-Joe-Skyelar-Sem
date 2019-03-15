import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class ProgressChart extends Component {
	render() {
		const chartWorkouts = this.props.workouts;

		// regionsArray is an array of just regions that we map from our journals array
		const regionsArray = chartWorkouts.map(workout => {
			return workout.region;
		});

		// filteredRegionsArray is a unique set of those regions that removes duplicates
		// this becomes the labels array for the doughnut chart
		let filteredRegionsArray = regionsArray.filter((region, i) => {
			return regionsArray.indexOf(region) === i;
		});

		// count in Array function will take an array and a region and then return how many times that region shows up in the array
		function countInArray(array, region) {
			return array.filter(el => el === region).length;
		}

		// countsArray takes each unique region and then counts how many times that region showed up in our non-duped regionsArray
		// This becomes the data array for the doughnut chart
		let countsArray = filteredRegionsArray.map(region => {
			return countInArray(regionsArray, region);
		});

		const doughnutData = {
			labels: filteredRegionsArray,
			datasets: [
				{
					data: countsArray,
					label: "Body Region workedout",
					backgroundColor: [
						"#FF6384",
						"#8133ff",
						"#00ff87",
						"#00ffc3",
						"#5EB5EF",
						"#6BC8C9",
						"#ff9533",
						"#FFD87B"
					]
				}
			]
		};

		const doughnutOptions = {
			title: {
				display: true,
				text: "Body Regions Worked out"
			}
		};

		return (
			<>
				<Doughnut data={doughnutData} options={doughnutOptions} />
			</>
		);
	}
}

const mapStateToProps = ({ workoutReducer }) => {
	return {
		workouts: workoutReducer.workouts
	};
};

export default connect(
	mapStateToProps,
	{}
)(ProgressChart);
