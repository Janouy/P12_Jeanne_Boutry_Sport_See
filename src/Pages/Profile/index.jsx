import React, { useEffect, useState, useCallback } from "react";
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
	const [isInfosLoading, setIsInfosLoading] = useState(true);
	const [isActivityLoading, setIsActivityLoading] = useState(true);
	const [isSessionsLoading, setIsSessionsLoading] = useState(true);
	const [isPerformancesLoading, setIsPerformancesLoading] = useState(true);
	const [usersData, setUsersData] = useState([]);
	const [userActivityData, setUserActivityData] = useState([]);
	const [usersAverageSessionsData, setUsersAverageSessionsData] = useState([]);
	const [usersPerformancesData, setUsersPerformancesData] = useState([]);
	const getScreenSize = useCallback(() => {
		return window.innerWidth;
	}, []);
	const [windowSize, setWindowSize] = useState(getScreenSize);

	useEffect(() => {
		function handleResize() {
			setWindowSize(getScreenSize());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowSize, getScreenSize]);

	useEffect(() => {
		getUsersData()
			.then((data) => setUsersData(data))
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {
				setIsInfosLoading(false);
			});
		getActivitiesData()
			.then((data) => setUserActivityData(data))
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {
				setIsActivityLoading(false);
			});
		getUserAverageSessions()
			.then((data) => setUsersAverageSessionsData(data))
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {
				setIsSessionsLoading(false);
			});
		getPerformancesData()
			.then((data) => setUsersPerformancesData(data))
			.catch(function (error) {
				console.error(error);
			})
			.finally(function () {
				setIsPerformancesLoading(false);
			});
	}, []);

	return (
		<div className={`${styles.profileWrapper} container`}>
			<div className={`${styles.welcomeUser}`}>
				<span>Bonjour</span>
				<span className={styles.userName}>{isInfosLoading ? <Loader /> : usersData.getFirstName()}</span>
				<br />
				<span className={styles.feliz}>Félicitation ! Vous avez explosé vos objectifs hier 👏 </span>
			</div>
			<div className={`${styles.profile} row`}>
				<div className={`${styles.graphs} col-9 d-flex flex-column justify-content-between`}>
					{isActivityLoading ? (
						<Loader />
					) : (
						<ActivitiesRenderBarChart activitiesDatas={userActivityData.getFormatedActivitySessions()} />
					)}
					<div className="d-flex justify-content-between mt-2 mt-xl-5">
						{isSessionsLoading ? (
							<Loader />
						) : (
							<AverageSessionsRenderLineChart
								sessions={usersAverageSessionsData.getFormatedAverageSessions()}
							/>
						)}
						{isPerformancesLoading ? (
							<Loader />
						) : (
							<PerformancesRenderRadarChart
								performanceDatas={usersPerformancesData.getFormatedPerformancesDatas()}
							/>
						)}
						{isInfosLoading ? (
							<Loader />
						) : (
							<ScoreRenderPieChart
								lastScore={usersData.getDailyScoreInPercent()}
								windowSize={windowSize}
							/>
						)}
					</div>
				</div>
				<div className={`${styles.keyDataWrapper} col-3`}>
					{isInfosLoading ? <Loader /> : <NutritionalsInformations KeyData={usersData.getKeyDatas()} />}
				</div>
			</div>
		</div>
	);
}

export default Profile;
