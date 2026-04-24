import { calculateRisk } from "../services/riskService.js";

export const getRisk = (req, res) => {
  const risk = calculateRisk();
  res.json(risk);
};