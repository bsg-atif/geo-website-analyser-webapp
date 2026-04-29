"use client";

import BrandLogo from "@shared/components/branding/BrandLogo";
import { useState } from "react";
import { sideBarNavLinks } from "@constants/sidebar/sidebar-nav-links";
import SidebarNav from "./SidebarNav";
import ChevronButtonRenderer from "./ChevronButtonRenderer";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="px-1 tablet:px-2 border border-neutral-600 h-full flex flex-col">
      <header
        className={`flex items-center mb-5 py-5 ${!isExpanded && "justify-center"}`}
      >
        <BrandLogo
          className={`overflow-hidden transition-all`}
          logoTextClassName={`${isExpanded ? "w-70" : "w-0"}`}
          LogoIconClassName={`w-10 h-10 ${!isExpanded && "tablet:hidden"}`}
        />
        <div className="hidden tablet:block">
          <ChevronButtonRenderer
            size={20}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </header>
      <SidebarNav isExpanded={isExpanded} navItems={sideBarNavLinks} />
    </aside>
  );
}
