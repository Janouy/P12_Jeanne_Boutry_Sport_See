import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import ActivitiesRenderBarChart from "../../components/ActivitiesRenderBarChart";
import AverageSessionsRenderLineChart from "../../components/AverageSessionsRenderLineChart";
import PerformancesRenderRadarChart from "../../components/PerformancesRenderRadarChart";
import NutritionalsInformations from "../../components/NutritionalsInformations";
import ScoreRenderPieChart from "../../components/ScoreRenderPieChart";
import Loader from "../../components/Loader";
import { getUsersData, getUserAverageSessions, getActivitiesData, getPerformancesData } from "../../services";

/**
 * Display the profile page
 * @return { HTMLElement } With React components
 */
function Profile() {
	const userId = 12;
	const [usersData, setUsersData] = useState([]);
	const [connectedUserInfos, setConnectedUserInfos] = useState();
	const [usersActivitiesData, setUsersActivitiesData] = useState([]);
	const [connectedUserActivity, setConnectedUserActivity] = useState();
	const [usersAverageSessionsData, setUsersAverageSessionsData] = useState([]);
	const [connectedUserAverageSessions, setConnectedUserAverageSessions] = useState();
	const [usersPerformancesData, setUsersPerformancesData] = useState([]);
	const [connectedUserPerformances, setConnectedUserPerformance] = useState();

	useEffect(() => {
		getUsersData().then((data) => setUsersData(data));
		getActivitiesData().then((data) => setUsersActivitiesData(data));
		getUserAverageSessions().then((data) => setUsersAverageSessionsData(data));
		getPerformancesData().then((data) => setUsersPerformancesData(data));
	}, []);

	useEffect(() => {
		setConnectedUserInfos(usersData.find((user) => user.id === userId));
		setConnectedUserActivity(usersActivitiesData.find((activity) => activity.userId === userId));
		setConnectedUserAverageSessions(
			usersAverageSessionsData.find((averageSessions) => averageSessions.userId === userId),
		);
		setConnectedUserPerformance(usersPerformancesData.find((performances) => performances.userId === userId));
	}, [usersData, usersActivitiesData, usersAverageSessionsData, usersPerformancesData]);

	return (
		<div className={`${styles.profileWrapper} container`}>
			<div className={`${styles.welcomeUser}`}>
				<span>Bonjour</span>
				<span className={styles.userName}>
					{!connectedUserInfos ? <Loader /> : connectedUserInfos.getFirstName()}
				</span>
				<br />
				<span className={styles.feliz}>Félicitation ! Vous avez explosé vos objectifs hier 👏 </span>
			</div>
			<div className={`${styles.profile} row`}>
				<div className={`${styles.graphs} col-9 d-flex flex-column justify-content-between`}>
					{!connectedUserActivity ? (
						<Loader />
					) : (
						<ActivitiesRenderBarChart
							activitiesDatas={connectedUserActivity.getFormatedActivitySessions()}
						/>
					)}
					<div className="d-flex justify-content-between mt-5">
						{!connectedUserAverageSessions ? (
							<Loader />
						) : (
							<AverageSessionsRenderLineChart
								sessions={connectedUserAverageSessions.getFormatedAverageSessions()}
							/>
						)}
						{!connectedUserPerformances ? (
							<Loader />
						) : (
							<PerformancesRenderRadarChart
								performanceDatas={connectedUserPerformances.getFormatedPerformancesDatas()}
							/>
						)}
						{!connectedUserInfos ? (
							<Loader />
						) : (
							<ScoreRenderPieChart lastScore={connectedUserInfos.getLastScoreInPercent()} />
						)}
					</div>
				</div>
				<div className={`${styles.keyDataWrapper} col-3`}>
					{!connectedUserInfos ? (
						<Loader />
					) : (
						<NutritionalsInformations KeyData={connectedUserInfos.getKeyDatas()} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Profile;
