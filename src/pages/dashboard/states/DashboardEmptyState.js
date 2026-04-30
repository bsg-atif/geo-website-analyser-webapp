import GradientHeading from "@shared/components/GradientHeading";
import { MoveDown, MoveRight, Search, Sparkles, Zap } from "lucide-react";

export default function DashboardEmptyState() {
  return (
    <div className="border border-secondary-400/30 py-10 mt-10 rounded-2xl flex flex-col gap-y-5 bg-secondary-600/30">
      <GradientHeading title={"AI-Powered Website Analysis"} />
      <p className="opacity-50 self-center text-center px-5">
        Get instant, comprehensive insights into your website's UX/UI,
        performance, accessibility, and conversion optimization with
        cutting-edge AI analysis.
      </p>
      <div className="flex flex-col gap-3 tablet:flex-row justify-center items-center">
        <span className="inline-flex gap-x-2 items-center">
          <Search size={15} color="var(--color-neutral-200)" />
          <span className="opacity-70">Enter URL in the search bar above</span>
        </span>
        <MoveDown
          color="var(--color-neutral-200)"
          size={15}
          strokeWidth={3}
          className="tablet:hidden"
        />
        <MoveRight
          color="var(--color-neutral-200)"
          size={15}
          strokeWidth={3}
          className="hidden tablet:inline-block"
        />
        <span className="inline-flex gap-x-1 items-center">
          <Sparkles size={15} color="var(--color-accent-500)" />
          <span className="opacity-70">Click "Analyze" to start</span>
        </span>
      </div>

      <div className="self-center flex gap-x-2 px-5 py-3 rounded-full border border-secondary-400 text-secondary-400 bg-primary-700">
        <Zap size={20} />
        <span>Analysis takes just 5-10 seconds</span>
      </div>
    </div>
  );
}
