import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import NavBar from "../../components/NavBar";
import VerticalBar from "../../components/VerticalBar";
import Activity from "../../components/Activity";
import AverageSessions from "../../components/AverageSessions";
import Performances from "../../components/Performances";
import KeyDatas from "../../components/KeyDatas";
import Score from "../../components/Score";
import getUsers from "../../services/Users";
import Loader from "../../components/Loader";

/**
 * Display the profile page
 * @return { HTMLElement } With React components
 */
function Profile() {
	const userId = 12;
	const [userData, setUserData] = useState([]);
	const [connectedUser, setConnectedUser] = useState();

	// get users data from getUsers()
	useEffect(() => {
		getUsers().then((data) => setUserData(data));
	}, []);

	// find the connected user with the userId in the users data
	useEffect(() => {
		setConnectedUser(userData.find((user) => user.id === userId));
	}, [userData]);

	return (
		<div className={styles.profile}>
			<NavBar />
			<VerticalBar />
			<div>Bonjour {!connectedUser ? <Loader /> : connectedUser.getFirstName()}</div>
			<Activity />
			<AverageSessions />
			<Performances />
			{!connectedUser ? <Loader /> : <Score lastScore={connectedUser.getLastScore()} />}
			{!connectedUser ? (
				<Loader />
			) : (
				<KeyDatas
					calories={connectedUser.getKiloCalories()}
					protein={connectedUser.getProtein()}
					carbohydrate={connectedUser.getCarbohydrate()}
					lipid={connectedUser.getLipid()}
				/>
			)}
		</div>
	);
}

export default Profile;
