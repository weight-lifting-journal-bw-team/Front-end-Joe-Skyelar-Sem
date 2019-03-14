import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class ProgressChart extends Component {
	render() {
		const chartWorkouts = this.props.workouts;

		function uniqueWorkouts(workout, index, workouts) {
			return workouts.indexOf(workout) === index;
		}

		const uniqueRegionsArray = journals
			.filter(uniqueWorkouts)
			.map(workout => workout.region);

		const doughnutData = {
			datasets: [
				{
					data: [10, 20, 30],
					labels: ["Legs", "Arms", "Ears"],
					backgroundColor: ["#1E232D", "#594EEC", "#E9EEEF"]
				}
			]
		};

		return (
			<>
				<Doughnut data={doughnutData} />
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
