import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router, withRouter } from "react-router-dom";
import history from "./helpers/history";

// Redux setup
import { Provider } from "react-redux";
import store from "./store";

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<AppWithRouter />
		</Router>
	</Provider>,
	document.getElementById("root")
);
