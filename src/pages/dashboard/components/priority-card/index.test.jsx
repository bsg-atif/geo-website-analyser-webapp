import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PriorityCard from ".";

vi.mock("@shared/components/badge", () => ({
  default: ({ children, type }) => (
    <span data-testid="badge" data-type={type}>
      {children}
    </span>
  ),
}));

vi.mock("lucide-react", () => ({
  CircleCheck: (props) => (
    <svg data-testid="circle-check-icon" {...props}>
      <title>Circle Check Icon</title>
    </svg>
  ),
}));

describe("PriorityCard", () => {
  it("renders the priority card title", () => {
    render(<PriorityCard title="Fix broken links" priority="high" />);

    expect(screen.getByText("Fix broken links")).toBeInTheDocument();
  });

  it("renders the priority badge with the correct type and value", () => {
    render(<PriorityCard title="Fix broken links" priority="high" />);

    const badge = screen.getByTestId("badge");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("high");
    expect(badge).toHaveAttribute("data-type", "priority");
  });

  it("renders the CircleCheck icon", () => {
    render(<PriorityCard title="Fix broken links" priority="high" />);

    expect(screen.getByTestId("circle-check-icon")).toBeInTheDocument();
  });

  it("renders different priority values correctly", () => {
    render(<PriorityCard title="Improve page speed" priority="medium" />);

    expect(screen.getByText("Improve page speed")).toBeInTheDocument();
    expect(screen.getByTestId("badge")).toHaveTextContent("medium");
  });
});
