import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(
	cors({
		credentials: true,
	})
);

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());

const server = http.createServer(app);

app.use("/api", routes);

app.get("/", async (req, res) => {
	res.send("Backend is available!");
});
server.listen(8080, () => {
	console.log("Server running on http://localhost:8080");
});
