import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home";

// Auth Components
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

// Miscellaneous Components
import NotFound from "./components/misc/NotFound";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
