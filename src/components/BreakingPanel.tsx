import { predictions } from "@/data/mockData";

const breakingEvents = predictions.filter((p) => p.probability >= 85);

const BreakingPanel = () => {
  return (
    <div className="panel-border p-3 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="pulse-amber bg-terminal-amber text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">
          BREAKING
        </span>
        <span className="text-[10px] text-terminal-dim">HIGH CONFIDENCE &gt;85%</span>
      </div>
      {breakingEvents.map((event) => {
        const delta = event.probability - event.previousProbability;
        return (
          <div key={event.id} className="border border-terminal-amber/30 bg-terminal-amber/5 p-3 rounded-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-bold text-terminal-amber glow-amber leading-tight">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 text-[10px]">
                  <span className="text-terminal-dim">{event.source}</span>
                  <span className="text-terminal-dim">·</span>
                  <span className="text-terminal-dim">{event.category}</span>
                  <span className="text-terminal-dim">·</span>
                  <span className="text-terminal-dim">{event.timestamp}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-2xl font-bold text-terminal-amber glow-amber">
                  {event.probability}%
                </div>
                <div className="text-[10px] text-terminal-green">
                  ▲ +{delta}% 24H
                </div>
                <div className="pulse-amber text-[9px] font-bold text-terminal-amber mt-1 border border-terminal-amber/40 px-1.5 py-0.5 rounded-sm inline-block">
                  LIKELY
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BreakingPanel;
