import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import { formatNumber, formatCurrency } from "../lib/formatters";

import React from "react";
interface finalData {
	x: number;
	y: number;
}

interface BarPlotProps {
	chartMenu: string;
	priceDataPassed: finalData[];
}

export const BarPlot: React.FC<BarPlotProps> = ({
	chartMenu,
	priceDataPassed,
}) => {
	return (
		<ResponsiveContainer
			width="100%"
			minHeight={500}
		>
			<BarChart
				width={500}
				height={300}
				data={priceDataPassed}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="x"
					name="block number"
					stroke="hsl(var(--primary))"
					padding="gap"
					scale="band"
					label={{
						value: "Block Number",
						position: "insideBottomcenter",
						dy: 10,
					}}
				/>
				<YAxis
					tickFormatter={(tick) => formatCurrency(tick)}
					name="price"
					stroke="hsl(var(--primary))"
					label={{
						value: "price",
						position: "insideLeft",
						angle: -90,
						dy: -10,
					}}
				/>
				<Tooltip formatter={(price) => formatCurrency(price as number)} />
				<Legend />

				<Bar
					name="price"
					dataKey="y"
					fill="#82ca9d"
					activeBar={
						<Rectangle
							fill="gold"
							stroke="purple"
						/>
					}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
