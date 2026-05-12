import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import SidebarNav from "./sidebar-nav";

const mockUsePathname = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

vi.mock("next/link", () => ({
  default: ({ href, children, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

const DashboardIcon = ({ size }) => (
  <svg data-testid="dashboard-icon" data-size={size}>
    <title>Dashboard Icon</title>
  </svg>
);

const SettingsIcon = ({ size }) => (
  <svg data-testid="settings-icon" data-size={size}>
    <title>Settings Icon</title>
  </svg>
);

const navItems = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    id: 2,
    label: "Settings",
    href: "/settings",
    Icon: SettingsIcon,
  },
];

describe("SidebarNav", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/dashboard");
  });

  it("renders all navigation links", () => {
    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    expect(
      screen.getByRole("link", { name: /dashboard/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /settings/i })).toBeInTheDocument();
  });

  it("renders links with the correct href values", () => {
    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    expect(screen.getByRole("link", { name: /dashboard/i })).toHaveAttribute(
      "href",
      "/dashboard",
    );

    expect(screen.getByRole("link", { name: /settings/i })).toHaveAttribute(
      "href",
      "/settings",
    );
  });

  it("renders icons for each navigation item", () => {
    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    expect(screen.getByTestId("dashboard-icon")).toBeInTheDocument();
    expect(screen.getByTestId("settings-icon")).toBeInTheDocument();
  });

  it("passes size 20 to each icon", () => {
    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    expect(screen.getByTestId("dashboard-icon")).toHaveAttribute(
      "data-size",
      "20",
    );

    expect(screen.getByTestId("settings-icon")).toHaveAttribute(
      "data-size",
      "20",
    );
  });

  it("applies active class when pathname matches the item href", () => {
    mockUsePathname.mockReturnValue("/dashboard");

    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
    const settingsLink = screen.getByRole("link", { name: /settings/i });

    expect(dashboardLink).toHaveClass("bg-accent-400");
    expect(settingsLink).not.toHaveClass("bg-accent-400");
  });

  it("applies expanded label width when sidebar is expanded", () => {
    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    expect(screen.getByText("Dashboard")).toHaveClass("w-52");
    expect(screen.getByText("Settings")).toHaveClass("w-52");
  });

  it("applies collapsed label width when sidebar is not expanded", () => {
    render(<SidebarNav navItems={navItems} isExpanded={false} />);

    expect(screen.getByText("Dashboard")).toHaveClass("w-0");
    expect(screen.getByText("Settings")).toHaveClass("w-0");
  });

  it("adds tablet gap class when sidebar is expanded", () => {
    render(<SidebarNav navItems={navItems} isExpanded={true} />);

    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

    expect(dashboardLink).toHaveClass("tablet:gap-x-2");
  });

  it("does not add tablet gap class when sidebar is collapsed", () => {
    render(<SidebarNav navItems={navItems} isExpanded={false} />);

    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

    expect(dashboardLink).not.toHaveClass("tablet:gap-x-2");
  });
});
