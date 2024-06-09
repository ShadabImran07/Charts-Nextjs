import {
	BarChart,
	Bar,
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

export const StackedbarCharts: React.FC<BarPlotProps> = ({
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
				/>
				<YAxis
					tickFormatter={(tick) => formatCurrency(tick)}
					name="price"
					stroke="hsl(var(--primary))"
				/>
				<Tooltip formatter={(price) => formatCurrency(price as number)} />
				<Legend />

				<Bar
					name="price"
					dataKey="y"
					stackId="a"
					fill="#8884d8"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
