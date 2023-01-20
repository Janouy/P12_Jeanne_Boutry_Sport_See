import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Profile from "./Pages/Profile/index";
import { Routes, Route } from "react-router-dom";

function App() {
	const navigate = useNavigate();
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
