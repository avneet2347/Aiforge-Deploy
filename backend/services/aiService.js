export const generateAIConfig = async (prompt) => {
  return `
name: AIForge Pipeline

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Building project for: ${prompt}"
  `;
};