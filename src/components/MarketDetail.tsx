import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import type { Prediction } from "@/data/mockData";

const MarketDetail = ({ prediction: p }: { prediction: Prediction }) => {
  const chartData = p.history.map((val, i) => ({ idx: i, prob: val }));

  return (
    <div className="px-3 pb-3 border-t border-border bg-muted/10">
      <div className="grid grid-cols-[1fr_160px] gap-4 pt-2">
        <div>
          <p className="text-[10px] text-terminal-dim mb-2">AI SUMMARY</p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">{p.summary}</p>
          <div className="flex items-center gap-4 mt-2 text-[10px] text-terminal-dim">
            <span>SRC: {p.source}</span>
            <span>VOL: {p.volume}</span>
            <span>ODDS: {(p.probability / 100).toFixed(2)}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] text-terminal-dim mb-1">PROBABILITY / 10D</p>
          <div className="flex-1 min-h-[60px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <YAxis domain={[0, 100]} hide />
                <Line
                  type="monotone"
                  dataKey="prob"
                  stroke="hsl(120, 100%, 56%)"
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;
