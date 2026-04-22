import { ChevronFirst, ChevronLast } from "lucide-react";

export default function ChevronButtonRenderer({ isExpanded, setIsExpanded }) {
  return (
    <button
      className="rounded-md border border-accent-500 p-1"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        <ChevronFirst
          size={25}
          strokeWidth={2}
          color="var(--color-accent-500)"
        />
      ) : (
        <ChevronLast
          size={25}
          strokeWidth={2}
          color="var(--color-accent-500)"
        />
      )}
    </button>
  );
}
