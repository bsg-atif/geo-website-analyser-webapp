export default function StatusIndicator({ status }) {
  const statusStyles = {
    good: "bg-green-500 text-white",
    "needs improvement": "bg-accent-300 text-neutral-900",
    poor: "bg-red-600 text-white",
  };

  const normalizedStatus = status.toString().toLowerCase();
  const statusClass = statusStyles[normalizedStatus];

  return (
    <div className="p-3 text-center">
      <span
        className={`inline-block w-full rounded-full p-3 text-center font-bold capitalize ${statusClass}`}
      >
        {status}
      </span>
    </div>
  );
}
