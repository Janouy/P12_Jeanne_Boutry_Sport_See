import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import NavBar from "../../components/NavBar";
import VerticalBar from "../../components/VerticalBar";
import Activity from "../../components/Activity";
import AverageSessions from "../../components/AverageSessions";
import Performances from "../../components/Performances";
import KeyDatas from "../../components/KeyDatas";
import Score from "../../components/Score";
import { getUsersData, getUserAverageSessions, getActivitiesData, getPerformancesData } from "../../services";
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
	const [usersAverageSessionsData, setUsersAverageSessionsData] = useState([]);
	const [connectedUserAverageSessions, setConnectedUserAverageSessions] = useState();
	const [usersPerformancesData, setUsersPerformancesData] = useState([]);
	const [connectedUserPerformances, setConnectedUserPerformance] = useState();

	// get users data from getUsers()
	// get users's activities data from getActivitiesData()
	// get users's averages sessions data from getUserAverageSessions()
	// get users's performances  from getPerformancesData()
	useEffect(() => {
		getUsersData().then((data) => setUsersData(data));
		getActivitiesData().then((data) => setUsersActivityData(data));
		getUserAverageSessions().then((data) => setUsersAverageSessionsData(data));
		getPerformancesData().then((data) => setUsersPerformancesData(data));
	}, []);

	// find the connected user with the userId in the users data
	// find the connected user's activity with the userId in the users data
	// find the connected user's average sessions with the userId in the users data
	// find the connected user's peformances with the userId in the users data
	useEffect(() => {
		setConnectedUserInfos(usersData.find((user) => user.id === userId));
		setConnectedUserActivity(usersActivitiesData.find((activity) => activity.userId === userId));
		setConnectedUserAverageSessions(
			usersAverageSessionsData.find((averageSessions) => averageSessions.userId === userId),
		);
		setConnectedUserPerformance(usersPerformancesData.find((performances) => performances.userId === userId));
	}, [usersData, usersActivitiesData, usersAverageSessionsData, usersPerformancesData]);

	return (
		<div className={styles.profile}>
			<NavBar />
			<VerticalBar />
			<div>Bonjour {!connectedUserInfos ? <Loader /> : connectedUserInfos.getFirstName()}</div>
			{!connectedUserActivity ? <Loader /> : <Activity sessions={connectedUserActivity.getSessions()} />}
			{!connectedUserActivity ? (
				<Loader />
			) : (
				<AverageSessions sessions={connectedUserAverageSessions.getSessions()} />
			)}
			{!connectedUserPerformances ? (
				<Loader />
			) : (
				<Performances
					kind={connectedUserPerformances.getKind()}
					performanceDatas={connectedUserPerformances.getData()}
				/>
			)}

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
