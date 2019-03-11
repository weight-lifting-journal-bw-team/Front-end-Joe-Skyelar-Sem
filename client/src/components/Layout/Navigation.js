import React, { Component } from "react";

import {
	NavBarWrapper
} from "./LayoutStyles"

class Navigation extends Component {
	
	state = {
		dropdownActive: false
	}

	handleDropdown = () => {
		this.setState({
			dropdownActive: !this.state.dropdownActive
		})
	}

	handleLogout = () => {
		localStorage.removeItem("token")
		this.props.history.push("/login")
	}

	render() {
		return (
			<NavBarWrapper>
				<button
				// onClick -- this will open our modal
				>Add Workout</button>	
				<div 
				className="dropdown"
				onClick={this.handleDropdown}
				>
					<img alt="profile-pic"/>
					<h1>Welcome name</h1>
					{this.state.dropdownActive && 
						<div className="dropdown-content">
							<h2>Profile</h2>
							<h2
							onClick={this.handleLogout}
							>Logout</h2>		
						</div>
					}
				
				</div>
				
			</NavBarWrapper>
		);
	}
};

export default Navigation;
