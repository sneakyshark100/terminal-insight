import { useState, useEffect } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [syncAgo, setSyncAgo] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setSyncAgo((prev) => (prev >= 12 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = time.toLocaleTimeString("en-US", { hour12: false });

  return (
    <div className="flex items-center justify-between border-t border-border px-4 py-1.5 bg-background text-[10px]">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-terminal-green terminal-cursor inline-block" />
          <span className="text-terminal-green">CONNECTED</span>
        </span>
        <span className="text-terminal-dim">
          POLYMARKET: <span className="text-terminal-green">LIVE</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-terminal-dim">
          LAST SYNC: <span className="text-foreground">{syncAgo}s AGO</span>
        </span>
        <span className="text-foreground font-bold glow-green">{timeStr}</span>
      </div>
    </div>
  );
};

export default StatusBar;
