import React, { Component } from "react";

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
			<div>
				<h1>This is a navbar</h1>
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
				
			</div>
		);
	}
};

export default Navigation;
