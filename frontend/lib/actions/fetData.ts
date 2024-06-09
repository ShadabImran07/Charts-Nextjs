"use server";

import axios from "axios";
const api_key: string = "12345";

export const fetchData = async () => {
	try {
		const response = await axios.get("http://localhost:8080/api/price/list", {
			headers: {
				"x-api-key": `${api_key}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
