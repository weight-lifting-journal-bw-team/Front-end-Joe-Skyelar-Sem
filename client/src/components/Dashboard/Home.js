import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWorkouts } from "../../actions/workoutActions";
import { fetchCurrentUser } from "../../actions/authActions";

// Layout components
import Navigation from "../Layout/Navigation";
import WorkoutsList from "../Workouts/WorkoutsList";
import ProgressChart from "./ProgressChart";

import AddWorkout from "../Workouts/AddWorkout";

import {
	HomeBodyWrapper,
	StatsBarWrapper,
	ChartContainer,
	DashboardContainer
} from "./DashboardStyles";

import QuickStats from "./QuickStats";

class Home extends Component {
	state = {
		refresh: false
	}

	refreshWorkouts = () => {
		this.setState({refresh: !this.state.refresh})
	}

	componentDidUpdate = () => {
		this.props.fetchWorkouts(this.props.userId);
	};
	render() {
		return (
			<div>
				<Navigation history={this.props.history} />
				<DashboardContainer>
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
							<WorkoutsList refreshWorkouts={this.refreshWorkouts}/>
						</div>
					</HomeBodyWrapper>
				</DashboardContainer>
			</div>
		);
	}
}

const mapStateToProps = ({ authReducer }) => ({
	userId: authReducer.currentUserId
});

export default connect(
	mapStateToProps,
	{ fetchWorkouts, fetchCurrentUser }
)(Home);
