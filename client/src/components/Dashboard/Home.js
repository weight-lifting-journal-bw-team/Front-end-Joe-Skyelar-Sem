import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWorkouts } from "../../actions/workoutActions";

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
	componentDidUpdate = () => {
		this.props.fetchWorkouts(this.props.userId);
	};

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

const mapStateToProps = ({ authReducer }) => ({
	userId: authReducer.currentUser
});

export default connect(
	mapStateToProps,
	{ fetchWorkouts }
)(Home);
