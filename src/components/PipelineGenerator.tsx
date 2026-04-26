import { useState } from "react";
import { Wand2, Copy, Check, Loader2 } from "lucide-react";

const PipelineGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setOutput("");

    try {
      const response = await fetch("http://localhost:5000/api/pipeline/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setOutput(data.pipeline);
    } catch (error) {
      console.log(error);
      setOutput("Error generating pipeline");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">
            AI PIPELINE GENERATION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Describe it. We'll build it.
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Transform plain-English descriptions into production-ready CI/CD
            configurations — powered by AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                prompt.txt
              </span>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Deploy a Node.js app to Kubernetes with testing, Docker build, and rolling updates on push to main..."
              className="w-full h-48 bg-transparent text-foreground font-mono text-sm resize-none outline-none placeholder:text-muted-foreground/50"
            />

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="mt-4 w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_hsl(166_76%_52%_/_0.25)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Generate Pipeline
                </>
              )}
            </button>
          </div>

          {/* Output */}
          <div className="glass-card p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">
                  .github/workflows/deploy.yml
                </span>
              </div>

              {output && (
                <button
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            <pre className="h-48 overflow-auto text-sm font-mono leading-relaxed">
              {output ? (
                <code className="text-foreground/90">{output}</code>
              ) : (
                <code className="text-muted-foreground/40 italic">
                  {isGenerating
                    ? "// Generating..."
                    : "// Generated pipeline will appear here..."}
                </code>
              )}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineGenerator;