"use client";

import ScoreCards from "@pages/dashboard/sections/score-cards";
import Summary from "@pages/dashboard/sections/summary";

export default function DashboardContent({ url }) {
  return (
    <>
      <Summary />
      <ScoreCards />
    </>
  );
}
