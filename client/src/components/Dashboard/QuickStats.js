import React, { Component, Fragment } from "react";
import {
	StatContainer,
	ChartContainer,
	StatsContainer2,
	StatsContainer4
} from "./DashboardStyles";

class QuickStats extends Component {
	render() {
		return (
			<Fragment>
				<StatContainer>
					<h3>Total Workouts in the last seven days</h3>
					<h2>18</h2>
				</StatContainer>
				<StatsContainer2>
					<h3>Total workout time in the last 7 days </h3>
				</StatsContainer2>
				<StatsContainer4>
					<h3>Total days worked out in the last 7 days</h3>
					<h2>5</h2>
				</StatsContainer4>
			</Fragment>
		);
	}
}

export default QuickStats;
