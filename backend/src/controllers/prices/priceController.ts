import express from "express";
import csv from "csv-parser";
import fs, { stat } from "fs";
import path from "path";

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

const readJsonFile = (filePath: string): Promise<DataRecord[]> => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, "utf-8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(data));
			}
		});
	});
};

export const getPriceData = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const dataPath = path.join(__dirname, "./eth.blockPrices.json");
		const data = await readJsonFile(dataPath);
		if (data.length > 0) {
			return res.status(200).json({ status: true, data: data });
		}
		return res.status(404).json({ status: false, message: "No data found" });
	} catch (error: any) {
		console.error(error);
		return res
			.status(500)
			.json({ status: false, message: "Internal Server Error" });
	}
};
