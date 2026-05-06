import PriorityCard from "@pages/dashboard/components/priority-card";
import { Lightbulb } from "lucide-react";

export default function Recommendation({ recommendations }) {
  return (
    <section className="flex flex-col gap-y-5 bg-secondary-300/5 p-3 rounded-2xl mt-10 mb-10">
      <div className="flex flex-col laptop:flex-row gap-5">
        <Lightbulb
          size={60}
          color="var(--color-secondary-400)"
          className="self-start rounded-2xl p-3 bg-secondary-600"
        />
        <div className="grow space-y-5">
          <div className="flex flex-col">
            <h2 className="text-secondary-300">AI Recommendations</h2>
            <p className="opacity-50 max-w-full">
              Based on the analysis, here are the top priority actions to
              improve your website:
            </p>
          </div>
        </div>
      </div>
      {recommendations.map((recommendation, i) => (
        <PriorityCard
          key={i}
          title={recommendation.title}
          priority={recommendation.priority}
        />
      ))}
    </section>
  );
}
