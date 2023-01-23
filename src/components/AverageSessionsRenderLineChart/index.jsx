import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./style.module.css";

/**
 * Component to show a linechart graph representing user's sport average sessions's duration
 * @prop { array } connected user's sport average sessions's duration
 * @return { HTMLElement } the linechart
 */
function AverageSessionsRenderLineChart({ sessions }) {
	// add caption to row hover
	function CustomTooltip({ payload, active }) {
		if (active) {
			return (
				<div className={styles.customTooltip}>
					<p className={styles.sessionLength}>{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
	}
	return (
		<>
			<div className={styles.rightColor}></div>
			<div className={styles.leftColor}>
				Durée moyenne des
				<br />
				sessions
			</div>
			<div className={`${styles.lineChart}`}>
				<ResponsiveContainer>
					<LineChart
						data={sessions}
						margin={{
							top: 50,
							right: 10,
							left: 10,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
						<XAxis
							dataKey="day"
							style={{ textAnchor: "middle", fill: "rgba(255, 255, 255, 0.5)", fontSize: "12px" }}
							tickLine={false}
							axisLine={false}
						/>
						<Tooltip
							offset="20"
							cursor={false}
							content={<CustomTooltip />}
							wrapperStyle={{ outline: "none" }}
						/>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="1" x2="1" y2="1">
								<stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.5} />
								<stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
							</linearGradient>
							<linearGradient id="shadow" x1="1" y1="1" x2="0" y2="0">
								<stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.3} />
								<stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.3} />
							</linearGradient>
						</defs>
						<Line
							type="monotone"
							dataKey="sessionLength"
							stroke="url(#colorUv)"
							strokeWidth={4}
							dot={false}
							activeDot={{
								r: 8,
								stroke: "url(#shadow)",
								strokeWidth: 18,
								strokeDasharray: "",
								fill: "#ffff",
							}}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}

AverageSessionsRenderLineChart.propTypes = {
	sessions: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				day: PropTypes.string.isRequired,
				sessionLength: PropTypes.number.isRequired,
			}),
		]),
	),
};

export default AverageSessionsRenderLineChart;
