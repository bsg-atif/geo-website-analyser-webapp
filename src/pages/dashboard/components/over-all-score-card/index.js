"use client";

import useIsMobile from "@shared/hooks/useIsMobile";
import { useEffect, useState } from "react";

export default function OverallScoreCard({ score = 78 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const isMobile = useIsMobile();

  const size = isMobile ? 200 : 350;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const value = Math.floor(eased * score);
      setAnimatedScore(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div>
      <div className={`relative mb-5`}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--accent-400))"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
            opacity={0.35}
            filter="url(#glow)"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#scoreGradient)"
            strokeWidth={stroke}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--secondary-400))" />
              <stop offset="100%" stopColor="hsl(var(--accent-400))" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="20" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-bold text-accent-200">
            {animatedScore}
          </span>
          <span className="text-sm text-neutral-100/70">Overall Score</span>
        </div>
      </div>

      <div className="p-3 text-center">
        <span className="inline-block w-full p-3 bg-accent-500 text-center font-bold text-xl rounded-md text-neutral-900">
          Good
        </span>
      </div>
    </div>
  );
}
