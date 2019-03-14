import React, { Component } from "react";
import { connect } from "react-redux";

// Layout components
import Navigation from "../Layout/Navigation";
import WorkoutsList from "../Workouts/WorkoutsList";

import AddWorkout from "../Workouts/AddWorkout";

import {
	HomeBodyWrapper,
	StatsBarWrapper,
	StatContainer,
	ChartContainer
} from "./DashboardStyles";

class Home extends Component {
	render() {
		return (
			<div>
				<Navigation history={this.props.history} />
				<StatsBarWrapper>
					<StatContainer />
					<StatContainer />
					<StatContainer />
					<StatContainer />
				</StatsBarWrapper>
				<HomeBodyWrapper>
					<div className="left">
						<ChartContainer />
					</div>
					<AddWorkout />
					<div className="right">
						<WorkoutsList />
					</div>
				</HomeBodyWrapper>
			</div>
		);
	}
}

export default connect(
	null,
	{}
)(Home);
