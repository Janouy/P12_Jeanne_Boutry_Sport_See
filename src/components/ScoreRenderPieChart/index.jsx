import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Label } from "recharts";
import styles from "./style.module.css";

/**
 * Component showing a piechart graph representing user's average score
 * @prop { object } connected user's average score
 * @prop { number } the window size
 * @return { HTMLElement } the piechart
 */

function ScoreRenderPieChart({ averageScore, windowSize }) {
	const innerPie = [{ name: "innerPie", value: 100 }];
	const COLORS = ["#e60000", "#FBFBFB"];

	return (
		<div className={styles.pieChart}>
			<PieChart width={windowSize >= 1440 ? 260 : 200} height={windowSize >= 1440 ? 260 : 200}>
				<Pie
					data={averageScore}
					cx="50%"
					cy="50%"
					startAngle={90}
					innerRadius={88}
					outerRadius={100}
					dataKey="value"
					cornerRadius={40}
					stroke={"#FBFBFB"}
				>
					{averageScore.map((entry, index) => (
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
						value={`${averageScore[0]["value"]}%`}
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
	averageScore: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				value: PropTypes.number.isRequired,
			}),
		]),
	),
	windowSize: PropTypes.number.isRequired,
};

export default ScoreRenderPieChart;
