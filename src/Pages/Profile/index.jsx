import React from "react";
import styles from "./style.module.css";
import NavBar from "../../components/NavBar";
import VerticalBar from "../../components/VerticalBar";
import Activity from "../../components/Activity";
import AverageSessions from "../../components/AverageSessions";
import Performances from "../../components/Performances";
import UserInfo from "../../components/UserInfo";

function Profile() {
	return (
		<div className={styles.profile}>
			<NavBar />
			<VerticalBar />
			<UserInfo />
			<Activity />
			<AverageSessions />
			<Performances />
		</div>
	);
}

export default Profile;
