const badgeStyles = {
  priority: {
    high: "bg-red-600",
    medium: "bg-accent-500 text-neutral-900",
  },

  severity: {
    critical: "bg-red-600",
    warning: "bg-accent-500 text-neutral-900",
    info: "bg-neutral-100 text-neutral-900",
  },
};

export default function Badge({ children, type }) {
  const value = children.toString().toLowerCase();

  const badgeClass = badgeStyles[type][value];

  return (
    <span
      className={`inline-block py-1 rounded-full px-2 text-[10px] font-bold capitalize text-neutral-100 ${badgeClass}`}
    >
      {children}
    </span>
  );
}
