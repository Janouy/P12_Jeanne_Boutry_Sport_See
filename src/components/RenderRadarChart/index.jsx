import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis, Text } from "recharts";

function RenderRadarChart({ performanceDatas }) {
	function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
		return (
			<Text {...rest} verticalAnchor="middle" y={y + (y - cy) / 10} x={x + (x - cx) / -10}>
				{payload.value}
			</Text>
		);
	}
	return (
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
	);
}

export default RenderRadarChart;
