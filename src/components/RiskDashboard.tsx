import { useState } from "react";
import {
  Shield,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const RiskDashboard = () => {
  const [overallRisk, setOverallRisk] = useState(23);

  const [riskFactors, setRiskFactors] = useState([
    { label: "Code Complexity", score: 32, color: "bg-success" },
    { label: "Test Coverage", score: 87, color: "bg-primary" },
    { label: "Dependency Risk", score: 18, color: "bg-success" },
    { label: "Config Changes", score: 55, color: "bg-warning" },
    { label: "Rollback History", score: 12, color: "bg-success" },
  ]);

  const [deployments, setDeployments] = useState([
    { id: "#2847", service: "api-gateway", status: "success", risk: 12, time: "2m ago" },
    { id: "#2846", service: "auth-service", status: "success", risk: 8, time: "14m ago" },
    { id: "#2845", service: "payment-svc", status: "warning", risk: 64, time: "1h ago" },
    { id: "#2844", service: "user-service", status: "success", risk: 22, time: "2h ago" },
  ]);

  const analyzeRisk = () => {
    const newRisk = Math.floor(Math.random() * 70) + 10;

    setOverallRisk(newRisk);

    setRiskFactors([
      { label: "Code Complexity", score: Math.floor(Math.random() * 100), color: "bg-success" },
      { label: "Test Coverage", score: Math.floor(Math.random() * 100), color: "bg-primary" },
      { label: "Dependency Risk", score: Math.floor(Math.random() * 100), color: "bg-success" },
      { label: "Config Changes", score: Math.floor(Math.random() * 100), color: "bg-warning" },
      { label: "Rollback History", score: Math.floor(Math.random() * 100), color: "bg-success" },
    ]);

    setDeployments([
      {
        id: "#2850",
        service: "frontend-app",
        status: newRisk > 50 ? "warning" : "success",
        risk: newRisk,
        time: "Just now",
      },
      {
        id: "#2849",
        service: "auth-service",
        status: "success",
        risk: 18,
        time: "5m ago",
      },
      {
        id: "#2848",
        service: "payment-svc",
        status: "success",
        risk: 24,
        time: "12m ago",
      },
      {
        id: "#2847",
        service: "api-gateway",
        status: "success",
        risk: 14,
        time: "20m ago",
      },
    ]);
  };

  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">
            RISK ASSESSMENT
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Deploy with confidence
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Bayesian risk analysis scores every deployment before it hits production.
          </p>

          <button
            onClick={analyzeRisk}
            className="mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Analyze Risk
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Risk Score */}
          <div className="glass-card glow-border p-8 flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="8"
                />

                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(1 - overallRisk / 100) * 327} 327`}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-foreground">
                  {overallRisk}%
                </span>
                <span className="text-xs text-muted-foreground">
                  risk score
                </span>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 ${
                overallRisk > 50 ? "text-warning" : "text-success"
              }`}
            >
              {overallRisk > 50 ? (
                <>
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm font-medium">Medium Risk</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Safe to Deploy</span>
                </>
              )}
            </div>
          </div>

          {/* Risk Factors */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-mono text-muted-foreground mb-5 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              RISK FACTORS
            </h3>

            <div className="space-y-4">
              {riskFactors.map((f) => (
                <div key={f.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground/80">{f.label}</span>
                    <span className="font-mono text-muted-foreground">
                      {f.score}%
                    </span>
                  </div>

                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${f.color}`}
                      style={{ width: `${f.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Deployments */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-mono text-muted-foreground mb-5 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-primary" />
              RECENT DEPLOYS
            </h3>

            <div className="space-y-3">
              {deployments.map((d) => (
                <div
                  key={d.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/40"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        d.status === "success"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    />

                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {d.service}
                      </span>

                      <span className="text-xs text-muted-foreground ml-2 font-mono">
                        {d.id}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-xs font-mono ${
                        d.risk > 50 ? "text-warning" : "text-success"
                      }`}
                    >
                      {d.risk}%
                    </span>

                    <p className="text-xs text-muted-foreground">{d.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskDashboard;