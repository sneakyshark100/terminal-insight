import { categories } from "@/data/mockData";

interface Props {
  selected: string;
  onSelect: (cat: string) => void;
}

const CategorySidebar = ({ selected, onSelect }: Props) => {
  return (
    <div className="panel-border flex flex-col">
      <div className="px-3 py-2 border-b border-border">
        <span className="text-[10px] font-bold text-terminal-dim">CATEGORIES</span>
      </div>
      <div className="flex-1">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onSelect(cat.name)}
            className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors border-b border-border hover:bg-muted/30 ${
              selected === cat.name
                ? "text-primary bg-muted/20 glow-green"
                : "text-muted-foreground"
            }`}
          >
            <span className="font-medium">{cat.name}</span>
            <span className="text-[10px] text-terminal-dim">{cat.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
