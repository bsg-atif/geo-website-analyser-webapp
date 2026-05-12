import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DashboardContent from "./index";
import { useQuery } from "@tanstack/react-query";
import analyzeWebsite from "@pages/dashboard/api/queries/analyze-website";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("@pages/dashboard/api/queries/analyze-website", () => ({
  default: vi.fn(),
}));

vi.mock("@pages/dashboard/states/dashboard-loading-state", () => ({
  default: () => <div>Dashboard Loading State</div>,
}));

vi.mock("@pages/dashboard/states/dashboard-error-state", () => ({
  default: () => <div>Dashboard Error State</div>,
}));

vi.mock("@pages/dashboard/sections/summary", () => ({
  default: ({ data }) => <div>Summary: {data.title}</div>,
}));

vi.mock("@pages/dashboard/sections/score-cards", () => ({
  default: ({ data }) => <div>ScoreCards: {data.length}</div>,
}));

vi.mock("@pages/dashboard/sections/findings", () => ({
  default: ({ title, issues }) => (
    <div>
      Findings: {title} - {issues.length}
    </div>
  ),
}));

vi.mock("@pages/dashboard/sections/recommendations", () => ({
  default: ({ recommendations }) => (
    <div>Recommendations: {recommendations.length}</div>
  ),
}));

describe("DashboardContent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("passes the correct query config to useQuery", () => {
    useQuery.mockReturnValue({
      data: mockDashboardData,
      isLoading: false,
      isError: false,
    });

    render(<DashboardContent url="https://example.com" />);

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["insights", "https://example.com"],
      queryFn: expect.any(Function),
      enabled: true,
    });
  });

  it("uses enabled false when url is empty", () => {
    useQuery.mockReturnValue({
      data: mockDashboardData,
      isLoading: false,
      isError: false,
    });

    render(<DashboardContent url="" />);

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["insights", ""],
      queryFn: expect.any(Function),
      enabled: false,
    });
  });

  it("shows loading state when query is loading", () => {
    useQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    render(<DashboardContent url="https://example.com" />);

    expect(screen.getByText("Dashboard Loading State")).toBeInTheDocument();
  });

  it("shows error state when query has an error", () => {
    useQuery.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });

    render(<DashboardContent url="https://example.com" />);

    expect(screen.getByText("Dashboard Error State")).toBeInTheDocument();
  });

  it("renders all dashboard sections when data is available", () => {
    useQuery.mockReturnValue({
      data: mockDashboardData,
      isLoading: false,
      isError: false,
    });

    render(<DashboardContent url="https://example.com" />);

    expect(
      screen.getByText("Summary: Website Audit Summary"),
    ).toBeInTheDocument();
    expect(screen.getByText("ScoreCards: 2")).toBeInTheDocument();
    expect(screen.getByText("Findings: SEO Issues - 2")).toBeInTheDocument();
    expect(
      screen.getByText("Findings: Performance Issues - 1"),
    ).toBeInTheDocument();
    expect(screen.getByText("Recommendations: 2")).toBeInTheDocument();
  });

  it("calls analyzeWebsite with the correct url when queryFn is executed", async () => {
    useQuery.mockReturnValue({
      data: mockDashboardData,
      isLoading: false,
      isError: false,
    });

    render(<DashboardContent url="https://example.com" />);

    const queryConfig = useQuery.mock.calls[0][0];

    await queryConfig.queryFn();

    expect(analyzeWebsite).toHaveBeenCalledWith("https://example.com");
  });
});

const mockDashboardData = {
  summary: {
    title: "Website Audit Summary",
  },
  scores: [
    {
      id: 1,
      title: "SEO",
      score: 85,
    },
    {
      id: 2,
      title: "Performance",
      score: 72,
    },
  ],
  findings: [
    {
      title: "SEO Issues",
      items: [
        {
          id: 1,
          title: "Missing meta description",
        },
        {
          id: 2,
          title: "Missing alt text",
        },
      ],
    },
    {
      title: "Performance Issues",
      items: [
        {
          id: 3,
          title: "Large image size",
        },
      ],
    },
  ],
  recommendations: [
    {
      id: 1,
      title: "Add meta descriptions",
    },
    {
      id: 2,
      title: "Compress images",
    },
  ],
};
