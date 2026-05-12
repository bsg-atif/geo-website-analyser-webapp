import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import OverallScoreCard from ".";

const mockUseIsMobile = vi.fn();

vi.mock("@shared/hooks/use-is-mobile", () => ({
  default: () => mockUseIsMobile(),
}));

vi.mock("../status-indicator", () => ({
  default: ({ status }) => (
    <div data-testid="status-indicator">Status: {status}</div>
  ),
}));

describe("OverallScoreCard", () => {
  beforeEach(() => {
    vi.useFakeTimers();

    let currentTime = 0;

    vi.spyOn(performance, "now").mockImplementation(() => currentTime);

    vi.stubGlobal("requestAnimationFrame", (callback) => {
      return setTimeout(() => {
        currentTime += 1200;
        callback(currentTime);
      }, 16);
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders the overall score label and status indicator", () => {
    mockUseIsMobile.mockReturnValue(false);

    render(<OverallScoreCard score={82} status="good" />);

    expect(screen.getByText("Overall Score")).toBeInTheDocument();
    expect(screen.getByTestId("status-indicator")).toHaveTextContent(
      "Status: good",
    );
  });

  it("starts from 0 before the animation finishes", () => {
    mockUseIsMobile.mockReturnValue(false);

    render(<OverallScoreCard score={82} status="good" />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("animates to the final score", () => {
    mockUseIsMobile.mockReturnValue(false);

    render(<OverallScoreCard score={82} status="good" />);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(screen.getByText("82")).toBeInTheDocument();
  });

  it("uses desktop SVG size when screen is not mobile", () => {
    mockUseIsMobile.mockReturnValue(false);

    const { container } = render(
      <OverallScoreCard score={75} status="needs improvement" />,
    );

    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("width", "350");
    expect(svg).toHaveAttribute("height", "350");
    expect(svg).toHaveAttribute("viewBox", "0 0 350 350");
  });

  it("uses mobile SVG size when screen is mobile", () => {
    mockUseIsMobile.mockReturnValue(true);

    const { container } = render(
      <OverallScoreCard score={75} status="needs improvement" />,
    );

    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("width", "200");
    expect(svg).toHaveAttribute("height", "200");
    expect(svg).toHaveAttribute("viewBox", "0 0 200 200");
  });
});
