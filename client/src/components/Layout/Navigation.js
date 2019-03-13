import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleWorkoutModal } from "../../actions/workoutActions";

import { NavBarWrapper, AddWorkoutButton, ProfileWrapper, DropDownWrapper } from "./LayoutStyles";

class Navigation extends Component {
	state = {
		dropdownActive: false
	};

	handleDropdown = () => {
		this.setState({
			dropdownActive: !this.state.dropdownActive
		});
	};

	handleLogout = () => {
		localStorage.removeItem("token");
		this.props.history.push("/login");
	};

	render() {
		return (
			<NavBarWrapper>
				<AddWorkoutButton onClick={this.props.toggleWorkoutModal}>
					ADD WORKOUT
				</AddWorkoutButton>
				<ProfileWrapper 
				onClick={this.handleDropdown}>
					<img 
					alt="profile-pic"
					src="https://ca.slack-edge.com/T4JUEB3ME-UD6GGPEHM-ced775b40a2d-72" 
					/>
					<h1>Welcome, <span>Joe</span></h1>
					{this.state.dropdownActive && (
						<DropDownWrapper>
							<h2>Profile</h2>
							<h2 onClick={this.handleLogout}>Logout</h2>
						</DropDownWrapper>
					)}
				</ProfileWrapper>
			</NavBarWrapper>
		);
	}
}

export default connect(
	null,
	{ toggleWorkoutModal }
)(Navigation);
