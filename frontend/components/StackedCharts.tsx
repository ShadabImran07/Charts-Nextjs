import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import { formatNumber, formatCurrency } from "../lib/formatters";

import React from "react";
interface finalData {
	x: number;
	y: number;
}

interface StackedChartProps {
	chartMenu: string;
	priceDataPassed: finalData[];
}

export const StackedCharts: React.FC<StackedChartProps> = ({
	chartMenu,
	priceDataPassed,
}) => {
	return (
		<ResponsiveContainer
			width="100%"
			minHeight={500}
		>
			<AreaChart
				width={300}
				height={250}
				data={priceDataPassed}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid
					strokeDasharray="3 3"
					stroke="hsl(var(--muted))"
				/>
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
				<Area
					type="monotone"
					dataKey="y"
					stackId="1"
					stroke="#8884d8"
					fill="#8884d8"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
