import { useState } from "react";
import { Activity, Cpu, HardDrive, Wifi } from "lucide-react";

const generateSparkline = (points: number) => {
  const values = Array.from({ length: points }, () => 20 + Math.random() * 60);
  const width = 200;
  const height = 40;
  const step = width / (points - 1);

  return values
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"} ${i * step} ${height - (v / 100) * height}`
    )
    .join(" ");
};

const HealthMonitor = () => {
  const [metrics, setMetrics] = useState([
    {
      label: "Response Time",
      value: "142ms",
      change: "-12%",
      icon: Activity,
    },
    {
      label: "CPU Usage",
      value: "34%",
      change: "+2%",
      icon: Cpu,
    },
    {
      label: "Memory",
      value: "2.1GB",
      change: "+5%",
      icon: HardDrive,
    },
    {
      label: "Throughput",
      value: "1.2k/s",
      change: "+8%",
      icon: Wifi,
    },
  ]);

  const [timeline, setTimeline] = useState([
    { time: "14:32", event: "Canary deployment started", status: "info" },
    { time: "14:35", event: "Health checks passing", status: "success" },
    { time: "14:38", event: "Traffic shifted to 25%", status: "info" },
    { time: "14:44", event: "Promoting to 100%", status: "success" },
    { time: "14:45", event: "Full rollout complete", status: "success" },
  ]);

  const refreshStats = () => {
    setMetrics([
      {
        label: "Response Time",
        value: `${100 + Math.floor(Math.random() * 80)}ms`,
        change: `-${Math.floor(Math.random() * 15)}%`,
        icon: Activity,
      },
      {
        label: "CPU Usage",
        value: `${20 + Math.floor(Math.random() * 60)}%`,
        change: `+${Math.floor(Math.random() * 10)}%`,
        icon: Cpu,
      },
      {
        label: "Memory",
        value: `${(1 + Math.random() * 3).toFixed(1)}GB`,
        change: `+${Math.floor(Math.random() * 8)}%`,
        icon: HardDrive,
      },
      {
        label: "Throughput",
        value: `${(0.8 + Math.random()).toFixed(1)}k/s`,
        change: `+${Math.floor(Math.random() * 12)}%`,
        icon: Wifi,
      },
    ]);

    setTimeline([
      { time: "15:02", event: "Deployment triggered", status: "info" },
      { time: "15:04", event: "Build completed", status: "success" },
      { time: "15:06", event: "Health checks running", status: "info" },
      { time: "15:08", event: "Traffic shifted to 50%", status: "success" },
      { time: "15:10", event: "System healthy", status: "success" },
    ]);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">
            HEALTH MONITORING
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-time deployment health
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Anomaly detection identifies issues within seconds of deployment.
          </p>

          <button
            onClick={refreshStats}
            className="mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Refresh Stats
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card p-5">
              <div className="flex items-center justify-between mb-3">
                <m.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-success">
                  {m.change}
                </span>
              </div>

              <p className="text-2xl font-bold text-foreground mb-1">
                {m.value}
              </p>

              <p className="text-xs text-muted-foreground">{m.label}</p>

              <svg
                className="mt-3 w-full h-10"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <path
                  d={generateSparkline(20)}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="glass-card p-6">
          <h3 className="text-sm font-mono text-muted-foreground mb-5">
            DEPLOYMENT TIMELINE
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 mb-4 last:mb-0 pl-1"
              >
                <div
                  className={`mt-1.5 w-2.5 h-2.5 rounded-full z-10 shrink-0 ${
                    item.status === "success"
                      ? "bg-success"
                      : "bg-info"
                  }`}
                  style={{ marginLeft: "10px" }}
                />

                <div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.time}
                  </span>

                  <p className="text-sm text-foreground/80">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthMonitor;