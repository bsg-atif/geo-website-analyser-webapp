import { ChevronDown, ChevronUp } from "lucide-react";

export default function DetailsButtonToggle({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="hover:bg-accent-300 rounded-2xl px-5 py-1 transition-all duration-300 self-start opacity-80 flex items-center gap-x-3"
    >
      {isOpen ? (
        <span className="flex  items-center gap-x-2">
          <ChevronUp size={15} /> Show less
        </span>
      ) : (
        <span className="flex  items-center gap-x-2">
          <ChevronDown size={15} /> View Details
        </span>
      )}
    </button>
  );
}
