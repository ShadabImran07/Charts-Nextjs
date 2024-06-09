import { NextFunction, Request, Response } from "express";

export const verifyApiKey = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers["x-api-key"];
		if (!token) {
			return res.status(401).json({
				status: false,
				errors: [
					{
						message: "You need your api key to proceed.",
						code: "API_KEY_NOT_FOUND",
					},
				],
			});
		}
		next();
	} catch (error: any) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
};
