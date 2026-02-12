import { useState } from "react";
import TickerBar from "@/components/TickerBar";
import BrandHeader from "@/components/BrandHeader";
import StatsBar from "@/components/StatsBar";
import BreakingPanel from "@/components/BreakingPanel";
import PrimaryFeed from "@/components/PrimaryFeed";
import TrendingMovers from "@/components/TrendingMovers";
import CategorySidebar from "@/components/CategorySidebar";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-mono crt-flicker">
      <div className="crt-overlay" />
      <TickerBar />
      <BrandHeader />
      <StatsBar />
      <div className="flex-1 grid grid-cols-[140px_1fr_320px] gap-0 min-h-0">
        <CategorySidebar selected={selectedCategory} onSelect={setSelectedCategory} />
        <PrimaryFeed selectedCategory={selectedCategory} />
        <div className="flex flex-col gap-0">
          <BreakingPanel />
          <TrendingMovers />
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default Index;
