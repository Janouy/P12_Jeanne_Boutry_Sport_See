import React from "react";
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis, Text } from "recharts";
import styles from "./style.module.css";

/**
 * A number, or a string containing a number.
 * @typedef {array} Performances
 */
/**
 * Component to show a radarchart graph representing user's performances
 * @param { Performances } connected user's performances
 * @return { HTMLElement } the radarchart
 */
function PerformancesRenderRadarChart({ performanceDatas }) {
	// define the spacing of the different types of activity
	function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
		return (
			<Text {...rest} verticalAnchor="middle" y={y + (y - cy) / 10} x={x + (x - cx) / -10}>
				{payload.value}
			</Text>
		);
	}
	return (
		<div className={`${styles.radarChart}`}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceDatas}>
					<PolarGrid strokeWidth={2} radialLines={false} />
					<PolarRadiusAxis domain={[20]} tick={false} tickCount={6.5} axisLine={false} />
					<PolarAngleAxis
						tick={(props) => renderPolarAngleAxis(props)}
						dataKey="kind"
						style={{ fill: "rgb(255, 255, 255)", fontSize: "0.6rem" }}
						tickLine={false}
						axisLine={false}
					/>
					<Radar dataKey="value" stroke="#f0101" fill="#ff0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}

PerformancesRenderRadarChart.propTypes = {
	performanceDatas: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				value: PropTypes.number.isRequired,
				kind: PropTypes.string.isRequired,
			}),
		]),
	),
};

export default PerformancesRenderRadarChart;
