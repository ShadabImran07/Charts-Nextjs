import React from "react";
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

const Loader: React.FC = () => {
	return (
		<>
			{/* <div className="flex items-center justify-center bg-white min-h-screen">
				// <div className="w-full flex items-center justify-center min-h-500">

				</div>
			</div> */}
			<ResponsiveContainer
				width="100%"
				minHeight={500}
			>
				<div className="flex items-center justify-center min-h-full">
					<div className="flex items-center justify-center w-12 h-12 rounded-full animate-spin border-4 border-solid border-yellow-500 border-t-transparent"></div>
				</div>
			</ResponsiveContainer>
		</>
	);
};

export default Loader;
