export const generatePipeline = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const yaml = `
name: Auto Deploy Pipeline

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Build Docker Image
        run: docker build -t myapp .

      - name: Deploy to Kubernetes
        run: kubectl apply -f deployment.yaml
`;

  res.json({ pipeline: yaml });
};