import { useState } from "react";
import { predictions, type Prediction } from "@/data/mockData";
import MarketDetail from "./MarketDetail";

interface Props {
  selectedCategory: string;
}

const PrimaryFeed = ({ selectedCategory }: Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = selectedCategory === "ALL"
    ? predictions
    : predictions.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => b.probability - a.probability);

  return (
    <div className="panel-border flex flex-col">
      <div className="flex items-center justify-between px-3 py-2 border-b border-border">
        <span className="text-[10px] font-bold text-terminal-dim">PRIMARY FEED — WIRE SERVICE</span>
        <span className="text-[10px] text-terminal-dim">{sorted.length} ACTIVE</span>
      </div>
      <div className="flex-1 overflow-y-auto max-h-[500px]">
        {sorted.map((pred) => (
          <FeedRow
            key={pred.id}
            prediction={pred}
            isExpanded={expandedId === pred.id}
            onToggle={() => setExpandedId(expandedId === pred.id ? null : pred.id)}
          />
        ))}
      </div>
    </div>
  );
};

const FeedRow = ({
  prediction: p,
  isExpanded,
  onToggle,
}: {
  prediction: Prediction;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const delta = p.probability - p.previousProbability;
  const isUp = delta >= 0;
  const probColor =
    p.probability >= 80
      ? "text-terminal-green"
      : p.probability >= 50
      ? "text-terminal-amber"
      : "text-terminal-red";

  return (
    <div
      className="border-b border-border hover:bg-muted/30 cursor-pointer transition-colors"
      onClick={onToggle}
    >
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="flex-shrink-0 w-14 text-right">
          <span className={`text-sm font-bold ${probColor}`}>{p.probability}%</span>
        </div>
        <div className="flex-shrink-0 w-20">
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${
                p.probability >= 80
                  ? "bg-terminal-green"
                  : p.probability >= 50
                  ? "bg-terminal-amber"
                  : "bg-terminal-red"
              }`}
              style={{ width: `${p.probability}%` }}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-foreground truncate block">{p.title}</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-[10px] font-bold ${isUp ? "text-terminal-green" : "text-terminal-red"}`}>
            {isUp ? "▲" : "▼"} {isUp ? "+" : ""}{delta}%
          </span>
          <span className="text-[9px] text-terminal-dim bg-muted px-1.5 py-0.5 rounded-sm">{p.category}</span>
          <span className="text-[9px] text-terminal-dim">{p.timestamp}</span>
        </div>
      </div>
      {isExpanded && <MarketDetail prediction={p} />}
    </div>
  );
};

export default PrimaryFeed;
