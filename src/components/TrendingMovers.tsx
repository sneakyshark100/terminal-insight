import { predictions } from "@/data/mockData";

const TrendingMovers = () => {
  const movers = [...predictions]
    .map((p) => ({ ...p, delta: p.probability - p.previousProbability }))
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
    .slice(0, 6);

  return (
    <div className="panel-border flex flex-col">
      <div className="px-3 py-2 border-b border-border">
        <span className="text-[10px] font-bold text-terminal-dim">TRENDING MOVERS — 24H</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {movers.map((m) => {
          const isUp = m.delta >= 0;
          return (
            <div key={m.id} className="flex items-center gap-2 px-3 py-2 border-b border-border hover:bg-muted/30 transition-colors">
              <span
                className={`text-sm font-bold w-12 text-right ${
                  isUp ? "text-terminal-green glow-green" : "text-terminal-red glow-red"
                }`}
              >
                {isUp ? "+" : ""}{m.delta}%
              </span>
              <span className={`text-xs ${isUp ? "text-terminal-green" : "text-terminal-red"}`}>
                {isUp ? "▲" : "▼"}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-foreground truncate block">{m.title}</span>
              </div>
              <span className="text-[11px] font-bold text-muted-foreground">{m.probability}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingMovers;
