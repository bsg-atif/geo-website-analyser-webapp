"use client";

import analyzeWebsite from "@pages/dashboard/api/queries/analyze-website";
import Findings from "@pages/dashboard/sections/findings";
import Recommendation from "@pages/dashboard/sections/recommendations";
import ScoreCards from "@pages/dashboard/sections/score-cards";
import Summary from "@pages/dashboard/sections/summary";
import DashboardErrorState from "@pages/dashboard/states/dashboard-error-state";
import DashboardLoadingState from "@pages/dashboard/states/dashboard-loading-state";
import { useQuery } from "@tanstack/react-query";

export default function DashboardContent({ url }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["insights", url],
    queryFn: () => analyzeWebsite(url),
    enabled: Boolean(url),
  });
  console.log({
    isLoading,
    isError,
    data,
    error,
  });

  if (isLoading) return <DashboardLoadingState isLoading={isLoading} />;
  if (isError) return <DashboardErrorState />;

  return (
    <>
      <Summary data={data.summary} />
      <ScoreCards data={data.scores} />
      <section className="grid grid-cols-1 laptop:grid-cols-2 mt-10">
        {data.findings.map((finding, i) => (
          <Findings key={i} title={finding.title} issues={finding.items} />
        ))}
      </section>
      <Recommendation recommendations={data.recommendations} />
    </>
  );
}
