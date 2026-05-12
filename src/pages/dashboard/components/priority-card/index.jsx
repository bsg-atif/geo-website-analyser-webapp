import Badge from "@shared/components/badge";
import { CircleCheck } from "lucide-react";

export default function PriorityCard({ title, priority }) {
  return (
    <div className="flex gap-x-2 items-center text-sm justify-between bg-primary-700 p-3 rounded-xl">
      <div className="flex gap-x-2 items-center">
        <CircleCheck className="hidden tablet:block" size={15} />
        <span>{title}</span>
      </div>
      <Badge type={"priority"}>{priority}</Badge>
    </div>
  );
}
