import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import history from "./helpers/history";
import WorkoutModal from "react-modal";

// Redux setup
import { Provider } from "react-redux";
import store from "./store";

WorkoutModal.setAppElement("#root");

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<AppWithRouter />
		</Router>
	</Provider>,
	document.getElementById("root")
);
