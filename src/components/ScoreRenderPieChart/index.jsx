import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Label } from "recharts";
import styles from "./style.module.css";

/**
 * Component to show a piechart graph representing user's daily percent score
 * @component
 * @type {React.FC<InferProps<import("./propTypes").ScoreRenderPieChart.propTypes>>}
 * @returns {React.ReactElement} The graph
 */
function ScoreRenderPieChart({ lastScore, windowSize }) {
	const innerPie = [{ name: "innerPie", value: 100 }];
	const COLORS = ["#e60000", "#FBFBFB"];

	return (
		<div className={styles.pieChart}>
			<PieChart width={windowSize >= 1440 ? 260 : 200} height={windowSize >= 1440 ? 260 : 200}>
				<Pie
					data={lastScore}
					cx="50%"
					cy="50%"
					startAngle={90}
					innerRadius={88}
					outerRadius={100}
					dataKey="value"
					cornerRadius={40}
					stroke={"#FBFBFB"}
				>
					{lastScore.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Pie
					data={innerPie}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={88}
					fill="#FFFF"
					stroke={"#FFFF"}
					label={"none"}
				>
					<Label
						value={`${lastScore[0]["value"]}%`}
						position="centerBottom"
						className="label-top"
						fontSize={"26px"}
						style={{ textAnchor: "middle", fill: "rgb(0, 0, 0)" }}
					/>
					<Label value="de votre" position="center" className="label" fontSize={"16px"} />
					<Label value="objectif" position="centerTop" className="label2" fontSize={"16px"} />
				</Pie>
			</PieChart>
		</div>
	);
}

ScoreRenderPieChart.propTypes = {
	lastScore: PropTypes.array.isRequired,
};

export default ScoreRenderPieChart;
