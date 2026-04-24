import express from "express";
import { generatePipeline } from "../controllers/pipelineController.js";

const router = express.Router();

router.post("/generate", generatePipeline);

export default router;