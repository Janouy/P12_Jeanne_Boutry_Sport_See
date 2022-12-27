import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";
import RenderLineChart from "../../components/RenderLineChart";

/**
 * Display the connected user's average sessions
 * @param { array } connected user's average sessions
 * @return { HTMLElement }
 */

function AverageSessions({ sessions }) {
	return (
		<>
			<div className={styles.rightColor}></div>
			<div className={styles.leftColor}>
				Durée moyenne des
				<br />
				sessions
			</div>
			<div className={`${styles.lineChart}`}>
				<RenderLineChart sessions={sessions} />
			</div>
		</>
	);
}
AverageSessions.propTypes = {
	sessions: PropTypes.array.isRequired,
};
export default AverageSessions;
