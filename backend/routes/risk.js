import express from "express";
import { getRisk } from "../controllers/riskController.js";

const router = express.Router();

router.post("/calculate", getRisk);

export default router;