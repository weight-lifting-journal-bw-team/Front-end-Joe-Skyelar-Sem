import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
	state = {
		credentials: {
			username: "",
			password: ""
		}
	};

	handleChanges = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	loginUser = e => {
		e.preventDefault();

		// TO-DO: login user action creator
	};

	render() {
		return (
			<div>
				<form onSubmit={this.loginUser}>
					<input
						type="text"
						name="username"
						value={this.state.credentials.username}
						placeholder="username"
						onChange={this.handleChanges}
					/>
					<input
						type="password"
						name="password"
						value={this.state.credentials.password}
						placeholder="password"
						onChange={this.handleChanges}
					/>
					<button>Log in</button>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{}
)(Login);
