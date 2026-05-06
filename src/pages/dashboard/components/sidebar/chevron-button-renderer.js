import { ChevronFirst, ChevronLast } from "lucide-react";

export default function ChevronButtonRenderer({
  size,
  isExpanded,
  setIsExpanded,
}) {
  return (
    <button
      className="rounded-md border border-accent-500 p-1"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        <ChevronFirst
          size={size}
          strokeWidth={2}
          color="var(--color-accent-500)"
        />
      ) : (
        <ChevronLast
          size={size}
          strokeWidth={2}
          color="var(--color-accent-500)"
        />
      )}
    </button>
  );
}
