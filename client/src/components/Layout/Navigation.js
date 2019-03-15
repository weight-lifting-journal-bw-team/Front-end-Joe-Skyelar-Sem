import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleWorkoutModal } from "../../actions/workoutActions";
import { fetchCurrentUser } from "../../actions/authActions";

import {
	NavBarWrapper,
	AddWorkoutButton,
	ProfileWrapper,
	DropDownWrapper,
	ItemWrapper
} from "./LayoutStyles";

class Navigation extends Component {
	state = {
		dropdownActive: false,
		firstName: ""
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (this.props.userId !== prevProps.userId) {
			this.props.fetchCurrentUser(this.props.userId).then(() => {
				this.setState({ firstName: this.props.user.user.firstName });
			});
		}
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
				<ProfileWrapper onClick={this.handleDropdown}>
					<img
						alt="profile-pic"
						src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
					/>
					<h1>
						Welcome,{" "}
						<span>
							{this.state.firstName.charAt(0).toUpperCase() +
								this.state.firstName.slice(1)}
						</span>
					</h1>
					{this.state.dropdownActive && (
						<DropDownWrapper>
							<ItemWrapper>Profile</ItemWrapper>
							<ItemWrapper
								className="logout"
								onClick={this.handleLogout}
							>
								Logout
							</ItemWrapper>
						</DropDownWrapper>
					)}
				</ProfileWrapper>
			</NavBarWrapper>
		);
	}
}

const mapStateToProps = ({ authReducer }) => ({
	userId: authReducer.currentUserId,
	user: authReducer.currentUser
});

export default connect(
	mapStateToProps,
	{ toggleWorkoutModal, fetchCurrentUser }
)(Navigation);
