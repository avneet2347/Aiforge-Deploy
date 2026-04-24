import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import open from "open";

dotenv.config();

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Pipeline API
app.post("/api/pipeline/generate", (req, res) => {
  const { prompt } = req.body;

  res.json({
    pipeline: `Generated pipeline for: ${prompt}`,
  });
});

// Start server
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`🚀 Server running at ${url}`);

  // Auto open browser
  open(url);
});
