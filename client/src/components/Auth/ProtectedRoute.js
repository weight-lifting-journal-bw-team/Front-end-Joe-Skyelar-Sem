import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, token, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				token ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

const mapStateToProps = ({ authReducer }) => ({
	token: authReducer.token
});

export default connect(
	mapStateToProps,
	{}
)(PrivateRoute);
