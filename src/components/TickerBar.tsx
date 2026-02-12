import { predictions } from "@/data/mockData";

const tickerItems = predictions.slice(0, 8);

const TickerBar = () => {
  const renderItem = (pred: typeof tickerItems[0], idx: number) => {
    const delta = pred.probability - pred.previousProbability;
    const isUp = delta >= 0;
    return (
      <span key={`${pred.id}-${idx}`} className="inline-flex items-center gap-1.5 whitespace-nowrap px-4">
        <span className="text-muted-foreground text-xs">{pred.title}</span>
        <span className={`font-bold text-sm ${isUp ? "text-terminal-green glow-green" : "text-terminal-red glow-red"}`}>
          {isUp ? "▲" : "▼"} {pred.probability}%
        </span>
        <span className="text-terminal-dim">·</span>
      </span>
    );
  };

  return (
    <div className="w-full overflow-hidden border-b border-border bg-background">
      <div className="ticker-scroll inline-flex">
        {tickerItems.map((p, i) => renderItem(p, i))}
        {tickerItems.map((p, i) => renderItem(p, i + 100))}
      </div>
    </div>
  );
};

export default TickerBar;
