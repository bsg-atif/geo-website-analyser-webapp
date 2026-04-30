"use client";

import ScoreCards from "@pages/dashboard/sections/score-cards";
import Summary from "@pages/dashboard/sections/summary";
import DashboardErrorState from "@pages/dashboard/states/DashboardErrorState";
import DashboardLoadingState from "@pages/dashboard/states/DashboardLoadingState";
import { useQuery } from "@tanstack/react-query";

export default function DashboardContent({ url }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["insights", url],
    queryFn: async () => {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch analysis");
      }

      return data;
    },
    enabled: Boolean(url),
  });
  console.log({
    isLoading,
    isError,
    data,
  });

  if (isLoading) return <DashboardLoadingState isLoading={isLoading} />;
  if (isError) return <DashboardErrorState />;

  return (
    <>
      <Summary data={data} />
      <ScoreCards data={data.scores} />
    </>
  );
}
