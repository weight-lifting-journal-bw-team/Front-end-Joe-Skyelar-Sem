import React, { Component } from "react";
import { connect } from "react-redux";

// action creators
import { registerUser } from "../../actions/authActions";

// component styles
import {
	AuthContainer,
	AuthWrapper,
	AuthTitle,
	AuthInput,
	AuthButton,
	AuthHelper
} from "./AuthStyles";

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
			<AuthContainer>
				<AuthWrapper>
					<AuthTitle>Create an account</AuthTitle>

					<form onSubmit={this.registerUser}>
						<AuthInput
							type="text"
							name="firstName"
							value={this.state.credentials.firstName}
							placeholder="firstname"
							onChange={this.handleChanges}
						/>
						<AuthInput
							type="text"
							name="lastName"
							value={this.state.credentials.lastName}
							placeholder="lastname"
							onChange={this.handleChanges}
						/>
						<AuthInput
							type="text"
							name="username"
							value={this.state.credentials.username}
							placeholder="username"
							onChange={this.handleChanges}
						/>
						<AuthInput
							type="email"
							name="email"
							value={this.state.credentials.email}
							placeholder="email"
							onChange={this.handleChanges}
						/>
						<AuthInput
							type="password"
							name="password"
							value={this.state.credentials.password}
							placeholder="password"
							onChange={this.handleChanges}
						/>
						<AuthButton type="submit">Create an account</AuthButton>

						<AuthHelper>
							Already have an account? Sign in here
						</AuthHelper>
					</form>
				</AuthWrapper>
			</AuthContainer>
		);
	}
}

export default connect(
	null,
	{ registerUser }
)(Register);
