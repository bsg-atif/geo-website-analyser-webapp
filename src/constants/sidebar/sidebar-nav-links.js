import { LayoutDashboard, MessageSquare } from "lucide-react";

export const sideBarNavLinks = [
  {
    id: "home",
    Icon: LayoutDashboard,
    label: "Home",
    href: "/dashboard",
  },
  {
    id: "chat",
    Icon: MessageSquare,
    label: "Chat with AI",
    href: "/chat",
  },
];
