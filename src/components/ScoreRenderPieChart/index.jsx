import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Label } from "recharts";
import styles from "./style.module.css";

function ScoreRenderPieChart({ lastScore }) {
	const innerPie = [{ name: "innerPie", value: 100 }];
	const COLORS = ["#e60000", "#FBFBFB"];

	return (
		<div className={styles.pieChart}>
			<PieChart width={400} height={400}>
				<Pie
					data={lastScore}
					cx="32%"
					cy="32%"
					//startAngle={180}
					// endAngle={0}
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
					cx="32%"
					cy="32%"
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
