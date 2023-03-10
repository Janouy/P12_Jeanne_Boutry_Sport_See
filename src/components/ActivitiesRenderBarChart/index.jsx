import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

/**
 * Component to show a barChart graph representing user's sport acitivty
 * @prop { array } connected user's sport daily activity
 * @return { HTMLElement } the barChart
 */
function ActivitiesRenderBarChart({ activitiesDatas }) {
	const legendText = ["Poids (Kg)", "Calories brûlées (kCal)"];
	const colors = ["#000", "#e60000"];
	const roundNumber = 10;
	//find the min weight round down to tenths, not to begin the domain at 0
	const minWeight =
		roundNumber * Math.floor(Math.min(...activitiesDatas.map((data) => data["kilogram"])) / roundNumber);
	//find the max weight, round up to the next ten to end the domain
	const maxWeight =
		roundNumber * Math.ceil(Math.max(...activitiesDatas.map((data) => data["kilogram"])) / roundNumber);
	//find how many data is there to set the tickCount
	const tickCount = new Set(activitiesDatas.map((data) => data["kilogram"]));
	// add caption to bar hover
	function CustomTooltip({ payload, active }) {
		if (active) {
			return (
				<div className="customTooltipBarChart pt-3">
					<p>{`${payload[1].value} Kg`}</p>
					<p>{`${payload[0].value} Kcal`}</p>
				</div>
			);
		}
	}
	return (
		<div className="barChartWrapper">
			<ResponsiveContainer width="100%" height={320}>
				<BarChart data={activitiesDatas}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis
						dataKey="day"
						tickLine={false}
						style={{ fill: "#9B9EAC", fontSize: "14px" }}
						stroke="#DEDEDE"
					/>
					<Tooltip
						offset="20"
						content={<CustomTooltip />}
						wrapperStyle={{ outline: "none" }}
						cursor={{ fill: "rgba(196,196,196,0.5)" }}
					/>
					<YAxis
						yAxisId="right-axis"
						orientation="right"
						tickLine={false}
						axisLine={false}
						domain={[minWeight - roundNumber, maxWeight]}
						scale="log"
						interval={0}
						tickCount={tickCount.length}
						style={{ fill: "#9B9EAC", fontSize: "14px" }}
					/>
					<YAxis yAxisId="left-axis" tick={false} axisLine={false} />
					<Bar yAxisId="left-axis" dataKey="calories" fill="#00000" barSize={7} radius={[20, 20, 0, 0]} />
					<Bar yAxisId="right-axis" dataKey="kilogram" fill="#E60000" barSize={7} radius={[20, 20, 0, 0]} />
					<text x="100" y="18" dominantBaseline="hanging" fontSize="15">
						Activité Quotidienne
					</text>
					<Legend
						payload={legendText.map((item, index) => ({
							id: item,
							value: `${item}`,
							color: colors[index],
							type: "circle",
						}))}
						layout="horizontal"
						verticalAlign="top"
						align="center"
						iconSize={10}
						wrapperStyle={{ left: "30%", lineHeight: "40px", fontSize: "14px" }}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
ActivitiesRenderBarChart.propTypes = {
	performanceDatas: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				day: PropTypes.number.isRequired,
				kilogram: PropTypes.number.isRequired,
				calories: PropTypes.number.isRequired,
			}),
		]),
	),
};

export default ActivitiesRenderBarChart;
