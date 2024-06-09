/**
 * index.js
 * @description :: user file of community.
 */

import express from "express";
import { getPriceData } from "../../controllers/prices/priceController";
import { verifyApiKey } from "../../middleware/auth";
const router = express.Router();

router.route("/list").get(verifyApiKey, getPriceData);

export default router;
