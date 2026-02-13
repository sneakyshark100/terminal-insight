import msnLogo from "@/assets/msn-logo.png";

const BrandHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-background">
      <div className="flex items-center gap-4">
        <img src={msnLogo} alt="MSN Logo" className="h-8 w-8" />
        <h1 className="text-2xl font-bold tracking-widest text-primary glow-green">MSN</h1>
        <span className="text-xs text-terminal-dim">PREDICTION MARKET INTELLIGENCE TERMINAL</span>
      </div>
      <div className="flex items-center gap-4 text-xs text-terminal-dim">
        <span>v2.4.1</span>
        <span>SESSION: ACTIVE</span>
        <span className="terminal-cursor text-primary">_</span>
      </div>
    </div>
  );
};

export default BrandHeader;
