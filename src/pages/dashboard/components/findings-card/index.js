"use client";

import Badge from "@shared/components/badge";
import SeverityIcon from "@shared/components/severity-icon";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FindingsCard({
  title,
  description,
  detail,
  recommendation,
  severity,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="p-3 rounded-2xl bg-secondary-300/5 border border-secondary-600 flex flex-col gap-y-3">
      <div className="flex gap-x-5 justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <SeverityIcon severity={severity} />
          <div className="flex flex-col gap-y-1">
            <h3 className="text-sm text-secondary-600">{title}</h3>
            <p className="opacity-50 text-xs">{description}</p>
          </div>
        </div>
        <Badge type={"severity"}>{severity}</Badge>
      </div>
      {isOpen && (
        <div
          className={`flex flex-col gap-y-3 text-sm bg-primary-700 rounded-2xl p-3 my-3`}
        >
          <div>
            <h4 className="font-medium">Details:</h4>
            <p>{detail}</p>
          </div>
          <div>
            <h4 className="text-secondary-400 font-medium">Recommendation:</h4>
            <p>{recommendation}</p>
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
