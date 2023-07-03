import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Info from "./views/Info";
import Avg from "./views/Avg";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/info" element={<Info />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/avg" element={<Avg />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
