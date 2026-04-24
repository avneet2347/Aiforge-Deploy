import { generateAIConfig } from "../services/aiService.js";

export const generatePipeline = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const result = await generateAIConfig(prompt);

  res.json({ pipeline: result });
};