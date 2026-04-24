export const calculateRisk = () => {
  return {
    score: 22,
    status: "Safe to Deploy",
    factors: {
      codeComplexity: 30,
      testCoverage: 80,
      dependencyRisk: 20
    }
  };
};