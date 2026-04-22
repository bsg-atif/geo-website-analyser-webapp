"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ navItems, isExpanded }) {
  const pathName = usePathname();

  return (
    <ul className="h-full font-medium space-y-3">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`flex items-center gap-x-2 rounded-lg p-2 hover:bg-accent-700 ${pathName === item.href && "bg-accent-400"}`}
          >
            <span>{<item.Icon size={40} />}</span>
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
