import { Wand2, Shield, BarChart3, RotateCcw, History, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Pipeline Generation",
    desc: "Create CI/CD configs from plain-English descriptions using LLM-powered generation.",
  },
  {
    icon: Shield,
    title: "Risk Scoring",
    desc: "Bayesian risk analysis calculates deployment failure probability before every release.",
  },
  {
    icon: BarChart3,
    title: "Canary Analysis",
    desc: "Automated canary metric analysis with intelligent promotion and rollback gating.",
  },
  {
    icon: RotateCcw,
    title: "Smart Rollback",
    desc: "AI-powered anomaly detection triggers instant automated rollbacks when issues arise.",
  },
  {
    icon: History,
    title: "History Analysis",
    desc: "Learns from every deployment to continuously improve predictive accuracy.",
  },
  {
    icon: RefreshCw,
    title: "Multi-Env Sync",
    desc: "Coordinated deployments across staging, canary, and production environments.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">CAPABILITIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to ship safely
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_hsl(166_76%_52%_/_0.1)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
