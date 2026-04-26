import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import open from "open";

import pipelineRoutes from "./routes/pipeline.js";

dotenv.config();

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Use Routes
app.use("/api/pipeline", pipelineRoutes);

// Start server
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`🚀 Server running at ${url}`);
  open(url);
});