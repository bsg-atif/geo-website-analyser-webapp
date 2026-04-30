import PriorityCard from "@pages/dashboard/components/priority-card/PriorityCard";
import { Lightbulb } from "lucide-react";

export default function Recommendation() {
  return (
    <section className="flex gap-x-5 bg-secondary-300/5 p-5 rounded-2xl mt-10 mb-10">
      <Lightbulb
        size={60}
        color="var(--color-secondary-400)"
        className="self-start rounded-2xl p-3 bg-secondary-600"
      />
      <div className="grow space-y-5">
        <div className="flex flex-col">
          <h2 className="text-secondary-300">AI Recommendations</h2>
          <p className="opacity-50 max-w-full">
            Based on the analysis, here are the top priority actions to improve
            your website:
          </p>
        </div>
        <PriorityCard />
        <PriorityCard />
        <PriorityCard />
      </div>
    </section>
  );
}
