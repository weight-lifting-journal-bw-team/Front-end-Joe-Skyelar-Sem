import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creators
import { loginUser } from "../../actions/authActions";

// styles
import {
	AuthContainer,
	AuthWrapper,
	AuthTitle,
	Errors,
	AuthInput,
	AuthButton,
	AuthHelper
} from "./AuthStyles";

import Loader from "../misc/Loader";

class Login extends Component {
	state = {
		credentials: {
			username: "",
			password: ""
		}
	};

	componentDidMount = () => {
		if (localStorage.getItem("token")) return this.props.history.push("/");
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
					<AuthTitle>Sign into journal</AuthTitle>

					{this.props.errors && <Errors>{this.props.errors}</Errors>}
					<form onSubmit={this.loginUser}>
						<AuthInput
							errors={this.props.errors}
							type="text"
							name="username"
							value={this.state.credentials.username}
							placeholder="username"
							onChange={this.handleChanges}
						/>
						<AuthInput
							errors={this.props.errors}
							type="password"
							name="password"
							value={this.state.credentials.password}
							placeholder="password"
							onChange={this.handleChanges}
						/>

						<AuthButton
							type="submit"
							disabled={
								!this.state.credentials.username ||
								!this.state.credentials.password
							}
						>
							{this.props.fetching ? <Loader /> : "Sign in"}
						</AuthButton>
					</form>

					<AuthHelper>
						Dont have an account?{" "}
						<Link to="/register">Sign up here</Link>
					</AuthHelper>
				</AuthWrapper>
			</AuthContainer>
		);
	}
}

const mapStateToProps = ({ authReducer }) => ({
	fetching: authReducer.fetching,
	errors: authReducer.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
