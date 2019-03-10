import React, { Component } from "react";
import { connect } from "react-redux";

// action creators
import { loginUser } from "../../actions/authActions";

// styles
import {
	AuthContainer,
	AuthWrapper,
	AuthTitle,
	AuthInput,
	AuthButton,
	AuthHelper
} from "./AuthStyles";

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

		this.props.loginUser(this.state.credentials);
	};

	render() {
		return (
			<AuthContainer>
				<AuthWrapper>
					<AuthTitle>Sign in</AuthTitle>

					<form onSubmit={this.loginUser}>
						<AuthInput
							type="text"
							name="username"
							value={this.state.credentials.username}
							placeholder="username"
							onChange={this.handleChanges}
						/>
						<AuthInput
							type="password"
							name="password"
							value={this.state.credentials.password}
							placeholder="password"
							onChange={this.handleChanges}
						/>
						<AuthButton>Sign in</AuthButton>
					</form>

					<AuthHelper>Dont have an account? Sign up here</AuthHelper>
				</AuthWrapper>
			</AuthContainer>
		);
	}
}

export default connect(
	null,
	{ loginUser }
)(Login);
