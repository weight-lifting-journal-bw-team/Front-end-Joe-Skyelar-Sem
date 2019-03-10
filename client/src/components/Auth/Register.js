import React, { Component } from "react";
import { connect } from "react-redux";

// action creators
import { registerUser } from "../../actions/authActions";

class Register extends Component {
	state = {
		credentials: {
			firstName: "",
			lastName: "",
			username: "",
			email: "",
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

	registerUser = e => {
		e.preventDefault();

		this.props.registerUser(this.state.credentials);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.registerUser}>
					<input
						type="text"
						name="firstName"
						value={this.state.credentials.firstName}
						placeholder="firstname"
						onChange={this.handleChanges}
					/>
					<input
						type="text"
						name="lastName"
						value={this.state.credentials.lastName}
						placeholder="lastname"
						onChange={this.handleChanges}
					/>
					<input
						type="text"
						name="username"
						value={this.state.credentials.username}
						placeholder="username"
						onChange={this.handleChanges}
					/>
					<input
						type="email"
						name="email"
						value={this.state.credentials.email}
						placeholder="email"
						onChange={this.handleChanges}
					/>
					<input
						type="password"
						name="password"
						value={this.state.credentials.password}
						placeholder="password"
						onChange={this.handleChanges}
					/>
					<button>Create an account</button>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{ registerUser }
)(Register);
