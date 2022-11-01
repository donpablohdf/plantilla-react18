import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h6> en forma de CND:</h6>
		<ul>
			<li>Se usa bootstrap 5.2.2</li>
			<li>Se usa poppersjs 2.10.2</li>
			<li>Fontawesome 5.2.0</li>
		</ul>
		<h6>Instalados</h6>
		<ul>
			<li>Se usa node version 19</li>
			<li>Se usa react y react-dom version 18.2.0</li>
			<li>Se usa uuidv4 para crear ids únicos</li>
			<li>Se usa react-snippers para crear snippers de carga</li>
			<li>Se usa react-router y react-router-dom version 6.4.2</li>
		</ul>		
	</div>
);
