import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // version 6.4.2
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./services/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	// const basename se usa cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
	// puede establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, por ejemplo: BASENAME=/subdirectorio-publicacion/
	
	const basename = process.env.BASENAME || "BASENAME=/";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route  path="/" element={<Home/>}/>
						<Route  path="/demo" element={<Demo />} />
						<Route  path="/single/:theid" title="prueba" element={<Single />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
