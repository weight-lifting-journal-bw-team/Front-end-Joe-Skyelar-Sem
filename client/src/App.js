import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/Auth/ProtectedRoute";

// Global styles
import { GlobalStyle } from "./components/styles/Global";

// Components
import Home from "./components/Dashboard/Home";

// Auth Components
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

// Miscellaneous Components
import NotFound from "./components/misc/NotFound";

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalStyle />

				<Switch>
					<ProtectedRoute path="/" exact component={Home} />

					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
