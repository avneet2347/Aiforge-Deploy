const layers = [
  { label: "Frontend", techs: ["Next.js 14", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", techs: ["Node.js", "Express", "Python"] },
  { label: "CI/CD", techs: ["GitHub Actions", "GitLab CI", "Jenkins"] },
  { label: "Orchestration", techs: ["Kubernetes", "Amazon ECS", "Nomad"] },
  { label: "AI Framework", techs: ["TensorFlow Probability", "PyMC3"] },
  { label: "Monitoring", techs: ["Datadog", "New Relic", "Sentry"] },
];

const TechStack = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">TECHNOLOGY STACK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on proven technologies
          </h2>
        </div>

        <div className="space-y-3">
          {layers.map((layer) => (
            <div key={layer.label} className="glass-card p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-mono text-primary w-32 shrink-0 uppercase tracking-wider">
                {layer.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {layer.techs.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md bg-muted text-xs font-mono text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
