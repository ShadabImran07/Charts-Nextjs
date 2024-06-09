import {
	Bar,
	BarChart,
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { formatNumber, formatCurrency } from "../lib/formatters";

import React, { useEffect, useState } from "react";

interface finalData {
	x: number;
	y: number;
}

interface LineChartProps {
	chartMenu: string;
	priceDataPassed: finalData[];
}

const LineCharts: React.FC<LineChartProps> = ({
	chartMenu,
	priceDataPassed,
}) => {
	return (
		<>
			<ResponsiveContainer
				width="100%"
				minHeight={500}
			>
				<LineChart data={priceDataPassed}>
					<CartesianGrid stroke="hsl(var(--muted))" />
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

					<Line
						dot={false}
						dataKey="y"
						type="monotone"
						name="price"
						stroke="hsl(var(--primary))"
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};

export default LineCharts;
