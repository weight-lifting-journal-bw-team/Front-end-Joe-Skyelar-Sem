import React, { Component, Fragment } from "react";
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
					<h3>Total workouts in the last 7 days</h3>
					<h2>18</h2>
				</StatsContainer>
				<StatsContainer2>
					<h3>Total workout time in the last 7 days </h3>
					<h2>16</h2>
				</StatsContainer2>
				<StatsContainer3>
					<h3>Total workout time in the last 7 days </h3>
					<h2>16</h2>
				</StatsContainer3>
				<StatsContainer4>
					<h3>Total days worked out in the last 7 days</h3>
					<h2>5</h2>
				</StatsContainer4>
			</Fragment>
		);
	}
}

export default QuickStats;
