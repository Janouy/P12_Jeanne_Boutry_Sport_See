import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Profile from "./Pages/Profile/index";
import { Routes, Route } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	// TODO delete this code when the login system is operational
	useEffect(() => {
		return navigate("/12");
	}, [navigate]);
	return (
		<div className="App">
			<Routes>
				<Route path="/:id" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
