const badgeStyles = {
  priority: {
    high: "text-red-600",
    medium: "text-accent-200",
  },

  severity: {
    critical: "text-red-600",
    warning: "text-accent-200",
    info: "text-neutral-100",
  },
};

export default function Badge({ children, type }) {
  const value = children.toString().toLowerCase();

  const badgeClass = badgeStyles[type][value];

  return (
    <span
      className={`inline-block rounded-full px-2 text-xs font-medium capitalize border border-current ${badgeClass}`}
    >
      {children}
    </span>
  );
}
