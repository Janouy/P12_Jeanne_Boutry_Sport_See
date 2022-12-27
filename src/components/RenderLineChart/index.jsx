import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./style.css";

function RenderLineChart({ sessions }) {
	function CustomTooltip({ payload, active }) {
		if (active) {
			return (
				<div className="custom-tooltip">
					<p className="sessionLength">{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
	}
	return (
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
					//cursor={{ stroke: "#e60000", strokeWidth: 80 }}
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
					activeDot={{ r: 8, stroke: "url(#shadow)", strokeWidth: 18, strokeDasharray: "", fill: "#ffff" }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}

export default RenderLineChart;
