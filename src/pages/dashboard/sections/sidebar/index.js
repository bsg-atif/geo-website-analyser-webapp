"use client";

import BrandLogo from "@shared/components/branding/brand-logo";
import { useState } from "react";
import { sideBarNavLinks } from "@pages/dashboard/sections/sidebar/constants/sidebar-nav-links";
import ChevronButtonRenderer from "@pages/dashboard/components/sidebar/chevron-button-renderer";
import SidebarNav from "@pages/dashboard/components/sidebar/sidebar-nav";

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
          LogoIconClassName={`${!isExpanded && "tablet:hidden"}`}
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
