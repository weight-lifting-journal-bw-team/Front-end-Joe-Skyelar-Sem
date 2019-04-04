import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import jwtdecode from "jwt-decode";

// action creator
import { persistUser } from "../../actions/authActions";

class PrivateRoute extends Component {
	componentDidMount() {
		if (localStorage.getItem("token")) {
			const token = localStorage.getItem("token").toString();
			const decoded = jwtdecode(token);

			if (Date.now() / 1000 > decoded.exp) {
				return localStorage.removeItem("token");
			}
			return this.props.persistUser(decoded.subject);
		}
	}

	render() {
		const { component: Component, token, ...rest } = this.props;

		return (
			<Route
				{...rest}
				render={props =>
					token ? <Component {...props} /> : <Redirect to="/login" />
				}
			/>
		);
	}
}

const mapStateToProps = ({ authReducer }) => ({
	token: authReducer.token
});

export default connect(
	mapStateToProps,
	{ persistUser }
)(PrivateRoute);
