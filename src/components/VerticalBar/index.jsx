import React from "react";
import styles from "./style.module.css";
import yoga from "../../assets/yoga.png";
import strength from "../../assets/strength.png";
import swim from "../../assets/swim.png";
import bike from "../../assets/yoga.png";

function VerticalBar() {
	return (
		<div className={styles.verticalbar}>
			<div className={styles.icons}>
				<img className={styles.icon} src={yoga} alt="yoga icon" />
				<img className={styles.icon} src={swim} alt="swimming icon" />
				<img className={styles.icon} src={bike} alt="biking icon" />
				<img className={styles.icon} src={strength} alt="alter icon" />
			</div>
			<div className={styles.copyright}>Copyright, SportSee 2020</div>
		</div>
	);
}

export default VerticalBar;
