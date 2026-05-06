export default function ProgressBar({ score }) {
  const safeScore = Math.min(Math.max(score, 0), 100);

  function getProgressColor(score) {
    if (score < 50) return "bg-red-500";
    if (score <= 75) return "bg-accent-300";
    return "bg-green-500";
  }

  return (
    <div className="rounded-full bg-secondary-600/20">
      <div
        style={{ width: `${safeScore}%` }}
        className={`h-5 rounded-full ${getProgressColor(safeScore)}`}
      />
    </div>
  );
}
