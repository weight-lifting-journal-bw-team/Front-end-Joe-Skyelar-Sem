import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWorkouts } from "../../actions/workoutActions";

// Layout components
import Navigation from "../Layout/Navigation";
import WorkoutsList from "../Workouts/WorkoutsList";
import ProgressChart from "./ProgressChart";

import AddWorkout from "../Workouts/AddWorkout";

import {
	HomeBodyWrapper,
	StatsBarWrapper,
	ChartContainer
} from "./DashboardStyles";

import QuickStats from "./QuickStats";

class Home extends Component {
	componentDidUpdate = () => {
		this.props.fetchWorkouts(this.props.userId);
	};

	render() {
		return (
			<div>
				<Navigation history={this.props.history} />
				<StatsBarWrapper>
					<QuickStats />
				</StatsBarWrapper>
				<HomeBodyWrapper>
					<div className="left">
						<ChartContainer>
							<ProgressChart />
						</ChartContainer>
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

const mapStateToProps = ({ authReducer }) => ({
	userId: authReducer.currentUser
});

export default connect(
	mapStateToProps,
	{ fetchWorkouts }
)(Home);
