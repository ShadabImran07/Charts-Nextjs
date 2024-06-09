"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChartCard from "@/components/ChartCard";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function Home() {
	const dropDownChartMenu = ["Line Chart", "Stacked Area Chart", "Bar Plot"];
	const [selectChartMenu, setSelectChartMenu] = useState(dropDownChartMenu[0]);
	const dropDownBlockMenu = ["1000 blocks", "10k block", "All Data"];
	const [selectBlockMenu, setSelectBlockMenu] = useState(dropDownBlockMenu[0]);
	return (
		<div className=" w-full pt-2 px-5">
			<Card>
				<CardHeader>
					<div className="flex gap-4 justify-between items-center">
						<CardTitle>Transaction Over Time</CardTitle>

						<div className="flex gap-10">
							<div>
								<Select
									value={selectChartMenu}
									onValueChange={(value) => setSelectChartMenu(value)}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue>{selectChartMenu}</SelectValue>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Chart Types</SelectLabel>
											{dropDownChartMenu.map((item, index) => (
												<SelectItem
													key={index}
													value={item}
												>
													{item}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Select
									value={selectBlockMenu}
									onValueChange={(value) => setSelectBlockMenu(value)}
								>
									<SelectTrigger className="w-full">
										<SelectValue>{selectBlockMenu}</SelectValue>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Number of blocks</SelectLabel>
											{dropDownBlockMenu.map((item, index) => (
												<SelectItem
													key={index}
													value={item}
												>
													{item}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<ChartCard
						chartMenu={selectChartMenu}
						dataLength={selectBlockMenu}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
