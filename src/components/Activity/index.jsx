import React from "react";
import PropTypes from "prop-types";
import RenderBarChart from "../../components/RenderBarChart";
import styles from "./style.module.css";

/**
 * Display the connected user's activities
 * @param { array } connected user's activities
 * @return { HTMLElement }
 */
function Activity({ sessions }) {
	return (
		<div className={styles.barChartWrapper}>
			<RenderBarChart activitiesDatas={sessions} />
		</div>
	);
}
Activity.propTypes = {
	sessions: PropTypes.array.isRequired,
};
export default Activity;
