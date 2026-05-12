import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ChevronButtonRenderer from "./chevron-button-renderer";

vi.mock("lucide-react", () => ({
  ChevronFirst: (props) => (
    <svg data-testid="chevron-first-icon" {...props}>
      <title>Chevron First</title>
    </svg>
  ),
  ChevronLast: (props) => (
    <svg data-testid="chevron-last-icon" {...props}>
      <title>Chevron Last</title>
    </svg>
  ),
}));

describe("ChevronButtonRenderer", () => {
  it("renders ChevronFirst icon when sidebar is expanded", () => {
    render(
      <ChevronButtonRenderer
        size={20}
        isExpanded={true}
        setIsExpanded={vi.fn()}
      />,
    );

    expect(screen.getByTestId("chevron-first-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("chevron-last-icon")).not.toBeInTheDocument();
  });

  it("renders ChevronLast icon when sidebar is collapsed", () => {
    render(
      <ChevronButtonRenderer
        size={20}
        isExpanded={false}
        setIsExpanded={vi.fn()}
      />,
    );

    expect(screen.getByTestId("chevron-last-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("chevron-first-icon")).not.toBeInTheDocument();
  });

  it("passes the size prop to the expanded icon", () => {
    render(
      <ChevronButtonRenderer
        size={24}
        isExpanded={true}
        setIsExpanded={vi.fn()}
      />,
    );

    expect(screen.getByTestId("chevron-first-icon")).toHaveAttribute(
      "size",
      "24",
    );
  });

  it("passes the size prop to the collapsed icon", () => {
    render(
      <ChevronButtonRenderer
        size={30}
        isExpanded={false}
        setIsExpanded={vi.fn()}
      />,
    );

    expect(screen.getByTestId("chevron-last-icon")).toHaveAttribute(
      "size",
      "30",
    );
  });

  it("calls setIsExpanded with false when expanded button is clicked", async () => {
    const user = userEvent.setup();
    const setIsExpanded = vi.fn();

    render(
      <ChevronButtonRenderer
        size={20}
        isExpanded={true}
        setIsExpanded={setIsExpanded}
      />,
    );

    await user.click(screen.getByRole("button"));

    expect(setIsExpanded).toHaveBeenCalledTimes(1);
    expect(setIsExpanded).toHaveBeenCalledWith(false);
  });

  it("calls setIsExpanded with true when collapsed button is clicked", async () => {
    const user = userEvent.setup();
    const setIsExpanded = vi.fn();

    render(
      <ChevronButtonRenderer
        size={20}
        isExpanded={false}
        setIsExpanded={setIsExpanded}
      />,
    );

    await user.click(screen.getByRole("button"));

    expect(setIsExpanded).toHaveBeenCalledTimes(1);
    expect(setIsExpanded).toHaveBeenCalledWith(true);
  });
});
