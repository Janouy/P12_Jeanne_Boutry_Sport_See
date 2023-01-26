import React from "react";
import "./App.css";
import Profile from "./Pages/Profile/index";
import Login from "./Pages/Login/index";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/:id" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
