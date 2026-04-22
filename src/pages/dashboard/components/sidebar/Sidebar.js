"use client";

import BrandLogo from "@shared/components/branding/BrandLogo";
import { useState } from "react";
import { sideBarNavLinks } from "@constants/sidebar/sidebar-nav-links";
import SidebarNav from "./SidebarNav";
import ChevronButtonRenderer from "./ChevronButtonRenderer";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className="p-3 border border-neutral-600 h-full flex flex-col">
      <header className="flex items-center mb-5 py-5">
        <BrandLogo
          className={`overflow-hidden transition-all ${isExpanded ? "w-70" : "w-0"}`}
          LogoIconClassName={`w-10 h-10`}
        />
        <ChevronButtonRenderer
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </header>
      <SidebarNav isExpanded={isExpanded} navItems={sideBarNavLinks} />
    </aside>
  );
}
