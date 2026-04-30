import { CircleCheck } from "lucide-react";

export default function PriorityCard() {
  return (
    <div className="flex items-center text-sm justify-between bg-primary-700 p-3 rounded-xl">
      <div className="flex gap-x-2 items-center">
        <CircleCheck />
        <span>Optimize and compress all images to WebP format</span>
      </div>
      <span className="inline-block bg-red-500 px-5 rounded-full font-bold">
        High
      </span>
    </div>
  );
}
