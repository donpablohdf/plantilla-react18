import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Ver componente Home</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/single/0">
					<button className="btn btn-primary">Ver componente Single demo[0] flux.js</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/single/1">
					<button className="btn btn-primary">Ver componente Single demo[1] flux.js</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Ver componente Demo</button>
				</Link>
			</div>
		</nav>
	);
};
