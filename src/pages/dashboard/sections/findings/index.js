import FindingsCard from "@pages/dashboard/components/findings-card";
import { Palette } from "lucide-react";

export default function Findings({ title, issues }) {
  return (
    <article className="p-3 rounded">
      <div className="flex justify-between items-center">
        <h2 className="flex gap-x-2 items-center text-accent-700 text-sm tablet:text-lg">
          <Palette />
          <span className="self-start">{title}</span>
        </h2>
        <span className="inline-block text-neutral-300/60 border border-current rounded-full text-xs bg-primary-600 py-1 px-3">
          {issues.length} items
        </span>
      </div>
      <ul className="flex flex-col gap-y-3 py-3">
        {issues.map((item, i) => (
          <FindingsCard
            key={i}
            title={item.title}
            description={item.description}
            detail={item.details}
            recommendation={item.recommendation}
            severity={item.severity}
          />
        ))}
      </ul>
    </article>
  );
}
