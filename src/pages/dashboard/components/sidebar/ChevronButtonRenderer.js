import { ChevronFirst, ChevronLast } from "lucide-react";

export default function ChevronButtonRenderer({ isExpanded, setIsExpanded }) {
  return (
    <button
      className="rounded-full border border-accent-500 p-1"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        <ChevronFirst
          size={35}
          strokeWidth={3}
          color="var(--color-accent-500)"
        />
      ) : (
        <ChevronLast
          size={35}
          strokeWidth={3}
          color="var(--color-accent-500)"
        />
      )}
    </button>
  );
}
