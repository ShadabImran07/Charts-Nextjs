/**
 * index.js
 * @description :: index user file of community.
 */

import express from "express";
import priceRoutes from "./priceRoutes";
const router = express.Router();

router.use("/price", priceRoutes);

export default router;
