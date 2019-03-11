import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creators
import { registerUser } from "../../actions/authActions";

// component styles
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

	registerUser = e => {
		e.preventDefault();

		this.props.registerUser(this.state.credentials);
	};

	render() {
		return (
			<AuthContainer>
				<AuthWrapper>
					<AuthTitle>Create an account</AuthTitle>

					{this.props.errors && (
						<Errors>{this.props.errors.message}</Errors>
					)}

					<form onSubmit={this.registerUser}>
						<AuthInput
							type="text"
							name="firstName"
							value={this.state.credentials.firstName}
							placeholder="first name"
							onChange={this.handleChanges}
						/>
						<AuthInput
							type="text"
							name="lastName"
							value={this.state.credentials.lastName}
							placeholder="last name"
							onChange={this.handleChanges}
						/>
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

						<AuthButton
							type="submit"
							disabled={
								!this.state.credentials.firstName ||
								!this.state.credentials.lastName ||
								!this.state.credentials.username ||
								!this.state.credentials.email ||
								!this.state.credentials.password
							}
						>
							{this.props.fetching ? (
								<Loader />
							) : (
								"Create an account"
							)}
						</AuthButton>

						<AuthHelper>
							Already have an account?{" "}
							<Link to="/login">Sign in here</Link>
						</AuthHelper>
					</form>
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
	{ registerUser }
)(Register);
