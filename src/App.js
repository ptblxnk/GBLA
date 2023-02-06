import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarW from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Sandwiches from "./components/pages/Sandwiches";
import Specialties from "./components/pages/Specialties";
import Bakery from "./components/pages/Bakery";
import Cafe from "./components/pages/Cafe";
import Contact from "./components/pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavbarW title="Mines" className="navbar" />
					<div className="container">
						<Routes>
							<Route className="nav-links" exact path="/" element={<Home />} />
							<Route
								className="nav-links"
								exact
								path="/menu"
								element={<Menu />}
							/>
							<Route
								className="nav-links"
								exact
								path="/sandwiches"
								element={<Sandwiches />}
							/>
							<Route
								className="nav-links"
								exact
								path="/specialties"
								element={<Specialties />}
							/>
							<Route
								className="nav-links"
								exact
								path="/bakery"
								element={<Bakery />}
							/>
							<Route
								className="nav-links"
								exact
								path="/cafe"
								element={<Cafe />}
							/>
							<Route
								className="nav-links"
								exact
								path="/contact"
								element={<Contact />}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
