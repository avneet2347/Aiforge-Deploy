const Footer = () => (
  <footer className="py-12 px-6 border-t border-border/50">
    <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
          <span className="text-xs font-bold text-primary">A</span>
        </div>
        <span className="font-semibold text-foreground text-sm">AIForge Deploy</span>
      </div>
      <p className="text-xs text-muted-foreground">
        AIForge Technical Suite — Confidential · April 2026
      </p>
    </div>
  </footer>
);

export default Footer;
