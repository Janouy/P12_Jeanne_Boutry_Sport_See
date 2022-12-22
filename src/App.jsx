import React from "react";
import "./App.css";
import Profile from "./Pages/Profile/index";
import NavBar from "./components/NavBar";
import VerticalBar from "./components/VerticalBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<VerticalBar />
			<Profile />
		</div>
	);
}

export default App;
