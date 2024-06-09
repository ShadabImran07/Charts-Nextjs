"use client";

import React, { useEffect, useState } from "react";
import { startOfWeek, format } from "date-fns";
import { StackedCharts } from "./StackedCharts";
// import { LineCharts } from "./LineCharts";
import { BarPlot } from "./BarPlot";
import { fetchData } from "../lib/actions/fetData";
import Loader from "./Loader";
import dynamic from "next/dynamic";
import simplify from "simplify-js";
import { StackedbarCharts } from "./StackedbarCharts";

const LineCharts = dynamic(() => import("./LineCharts"));
interface ChartCardProps {
	chartMenu: string;
	dataLength: string;
}
interface DataRecord {
	_id: {
		$oid: string;
	};
	blockNumber: number;
	timestamp: {
		$numberLong: string;
	};
	date: string;
	price: string;
	asset: string;
	__v: number;
}
interface finalData {
	x: number;
	y: number;
}

const ChartCard: React.FC<ChartCardProps> = ({ chartMenu, dataLength }) => {
	const [priceData, setPriceData] = useState<DataRecord[]>([]);
	const [priceDataPassed, setPriceDataPassed] = useState<finalData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const data = await fetchData();
			setPriceData(data.data);
			setLoading(false);
		};
		getData();
	}, []);

	useEffect(() => {
		if (priceData.length > 0) {
			let selectedData: finalData[] = [];
			if (dataLength === "1000 blocks") {
				const priceDataSimplfy = priceData.slice(0, 1000);

				selectedData = simplify(
					priceDataSimplfy.map((data) => ({
						x: data.blockNumber,
						y: Number(data.price),
					})),
					3
				);
			} else if (dataLength === "10k block") {
				const priceDataSimplfy = priceData.slice(0, 10000);
				selectedData = simplify(
					priceDataSimplfy.map((data) => ({
						x: data.blockNumber,
						y: Number(data.price),
					})),
					10
				);
			} else {
				const priceDataSimplfy = priceData;
				selectedData = simplify(
					priceDataSimplfy.map((data) => ({
						x: data.blockNumber,
						y: Number(data.price),
					})),
					15
				);
			}
			setPriceDataPassed(selectedData);
		}
	}, [priceData, dataLength]);

	const renderChart = () => {
		switch (chartMenu) {
			case "Line Chart":
				return (
					<LineCharts
						chartMenu={chartMenu}
						priceDataPassed={priceDataPassed}
					/>
				);
			case "Stacked Area Chart":
				return (
					<StackedCharts
						chartMenu={chartMenu}
						priceDataPassed={priceDataPassed}
					/>
				);
			case "Bar Plot":
				return (
					<BarPlot
						chartMenu={chartMenu}
						priceDataPassed={priceDataPassed}
					/>
				);

			default:
				return null;
		}
	};

	return <div>{loading ? <Loader /> : renderChart()}</div>;
};

export default ChartCard;
