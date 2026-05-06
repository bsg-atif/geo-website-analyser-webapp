import { CircleAlert, Info, TriangleAlert } from "lucide-react";

export default function SeverityIcon({ severity }) {
  const normalizedSeverity = severity.toLowerCase();

  const iconStyles = {
    info: {
      Icon: Info,
      color: "--color-neutral-100",
    },
    warning: {
      Icon: TriangleAlert,
      color: "--color-accent-400",
    },
    critical: {
      Icon: CircleAlert,
      color: "--color-red-500",
    },
  };

  const selected = iconStyles[normalizedSeverity];

  const Icon = selected.Icon;

  return (
    <Icon
      size={40}
      color={`var(${selected.color})`}
      className="hidden tablet:block rounded bg-neutral-800 p-2"
    />
  );
}
