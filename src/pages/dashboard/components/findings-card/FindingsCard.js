"use client";

import { ChevronDown, ChevronUp, TriangleAlert } from "lucide-react";
import { useState } from "react";

export default function FindingsCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="p-3 rounded-2xl bg-secondary-300/5 border border-secondary-600 flex flex-col gap-y-3">
      <div className="flex gap-x-5 justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <TriangleAlert
            size={40}
            color="var(--color-accent-400)"
            className="hidden tablet:block rounded bg-neutral-800 p-2"
          />
          <div className="flex flex-col gap-y-1">
            <h3 className="text-sm text-secondary-600">
              Inconsistent Button Styles
            </h3>
            <p className="opacity-50 text-xs">
              Multiple button variations create visual confusion
            </p>
          </div>
        </div>
        <div className="border px-3 py-1 rounded-full text-accent-200 font-medium text-xs border-current bg-primary-700 self-start">
          Warning
        </div>
      </div>
      {isOpen && (
        <div
          className={`flex flex-col gap-y-3 text-sm bg-primary-700 rounded-2xl p-3 my-3`}
        >
          <div>
            <h4 className="font-medium">Details:</h4>
            <p>
              Found 5 different button styles across the homepage. This
              inconsistency may confuse users and reduce trust.
            </p>
          </div>
          <div>
            <h4 className="text-secondary-400 font-medium">Recommendation:</h4>
            <p>
              Establish a unified button system with clear primary, secondary,
              and tertiary variants.
            </p>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-accent-300 rounded-2xl px-5 py-1 transition-all duration-300 self-start opacity-80"
      >
        {isOpen ? (
          <span className="flex items-center gap-x-3">
            <ChevronUp size={15} /> Show less
          </span>
        ) : (
          <span className="flex items-center gap-x-3">
            <ChevronDown size={15} /> View Details
          </span>
        )}
      </button>
    </li>
  );
}
