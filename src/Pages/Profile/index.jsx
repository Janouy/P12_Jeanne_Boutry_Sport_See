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
import getActivitiesData from "../../services/Activities";
import Loader from "../../components/Loader";

/**
 * Display the profile page
 * @return { HTMLElement } With React components
 */
function Profile() {
	const userId = 12;
	const [usersData, setUsersData] = useState([]);
	const [connectedUserInfos, setConnectedUserInfos] = useState();
	const [usersActivitiesData, setUsersActivityData] = useState([]);
	const [connectedUserActivity, setConnectedUserActivity] = useState();

	// get users data from getUsers()
	// get users's activities data from getActivitiesData()
	useEffect(() => {
		getUsers().then((data) => setUsersData(data));
		getActivitiesData().then((data) => setUsersActivityData(data));
	}, []);

	// find the connected user with the userId in the users data
	// find the connected user's activity with the userId in the users data
	useEffect(() => {
		setConnectedUserInfos(usersData.find((user) => user.id === userId));
		setConnectedUserActivity(usersActivitiesData.find((activity) => activity.userId === userId));
	}, [usersData, usersActivitiesData]);

	return (
		<div className={styles.profile}>
			<NavBar />
			<VerticalBar />
			<div>Bonjour {!connectedUserInfos ? <Loader /> : connectedUserInfos.getFirstName()}</div>
			{!connectedUserActivity ? <Loader /> : <Activity sessions={connectedUserActivity.getSessions()} />}
			<AverageSessions />
			<Performances />
			{!connectedUserInfos ? <Loader /> : <Score lastScore={connectedUserInfos.getLastScore()} />}
			{!connectedUserInfos ? (
				<Loader />
			) : (
				<KeyDatas
					calories={connectedUserInfos.getKiloCalories()}
					protein={connectedUserInfos.getProtein()}
					carbohydrate={connectedUserInfos.getCarbohydrate()}
					lipid={connectedUserInfos.getLipid()}
				/>
			)}
		</div>
	);
}

export default Profile;
