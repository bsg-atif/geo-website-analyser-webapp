"use client";

import Badge from "@shared/components/badge";
import SeverityIcon from "@shared/components/severity-icon";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import DetailsAndRecommendation from "./details-recommendation";
import DetailsButtonToggle from "./details-button-toggle";

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
            <h3 className="text-sm text-neutral-100">{title}</h3>
            <p className="opacity-70 text-xs">{description}</p>
          </div>
        </div>
        <Badge type={"severity"}>{severity}</Badge>
      </div>
      {isOpen && (
        <DetailsAndRecommendation
          detail={detail}
          recommendation={recommendation}
        />
      )}
      <DetailsButtonToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </li>
  );
}
