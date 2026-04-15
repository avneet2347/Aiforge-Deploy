import { Rocket, Shield, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-info/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(166_76%_52%_/_0.03)_0%,_transparent_70%)]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-primary">v2.0 — Intelligent CI/CD</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">AI</span>
          <span className="text-gradient">Forge</span>
          <span className="text-foreground"> Deploy</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Intelligent CI/CD pipeline assistant that configures, assesses risk,
          predicts rollbacks, and monitors deployments in real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all hover:shadow-[0_0_30px_hsl(166_76%_52%_/_0.3)] hover:scale-105">
            Start Deploying
            <Rocket className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors">
            View Documentation
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Shield, label: "Risk Reduction", value: "70%", desc: "fewer failures" },
            { icon: Activity, label: "MTTR Reduction", value: "80%", desc: "faster recovery" },
            { icon: Rocket, label: "Config Time", value: "<30min", desc: "from days" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-5 flex flex-col items-center gap-2">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
