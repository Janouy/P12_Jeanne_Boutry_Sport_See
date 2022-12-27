import React from "react";
import PropTypes from "prop-types";
import RenderRadarChart from "../RenderRadarChart";
import styles from "./style.module.css";

/**
 * Display the connected user's performances
 * @param { array } connected user's performances
 * @return { HTMLElement }
 */

function Performances({ performanceDatas }) {
	return (
		<div className={`${styles.radarChart}`}>
			<RenderRadarChart performanceDatas={performanceDatas} />
		</div>
	);
}
Performances.propTypes = {
	performanceDatas: PropTypes.array.isRequired,
};
export default Performances;
