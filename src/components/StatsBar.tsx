import { dashboardStats } from "@/data/mockData";

const StatsBar = () => {
  const s = dashboardStats;
  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-1.5 bg-background text-[10px]">
      <div className="flex items-center gap-6">
        <span className="text-terminal-dim">
          TRACKED: <span className="text-foreground font-bold">{s.totalPredictions}</span>
        </span>
        <span className="text-terminal-dim">
          AVG CONF: <span className="text-terminal-green font-bold">{s.avgConfidence}%</span>
        </span>
        <span className="text-terminal-dim">
          &gt;80% PROB: <span className="text-terminal-amber font-bold">{s.highProbCount}</span>
        </span>
        <span className="text-terminal-dim">
          ACCURACY MTD: <span className="text-terminal-green font-bold">{s.monthlyAccuracy}%</span>
        </span>
      </div>
    </div>
  );
};

export default StatsBar;
