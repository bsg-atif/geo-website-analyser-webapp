"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ navItems, isExpanded }) {
  const pathName = usePathname();

  return (
    <ul className="h-full space-y-2">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`flex items-center rounded-lg p-2 hover:bg-accent-700 ${pathName === item.href && "bg-accent-400"} ${isExpanded && "tablet:gap-x-2"}`}
          >
            <span>{<item.Icon size={20} />}</span>
            <span
              className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? "w-52" : "w-0"}`}
            >
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
