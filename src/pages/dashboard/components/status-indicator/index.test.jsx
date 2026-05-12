import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatusIndicator from ".";

describe("StatusIndicator", () => {
  it("renders the status text", () => {
    render(<StatusIndicator status="good" />);

    expect(screen.getByText("good")).toBeInTheDocument();
  });

  it("applies green styling for good status", () => {
    render(<StatusIndicator status="good" />);

    const status = screen.getByText("good");

    expect(status).toHaveClass("bg-green-500");
    expect(status).toHaveClass("text-white");
  });

  it("applies accent styling for needs improvement status", () => {
    render(<StatusIndicator status="needs improvement" />);

    const status = screen.getByText("needs improvement");

    expect(status).toHaveClass("bg-accent-300");
    expect(status).toHaveClass("text-neutral-900");
  });

  it("applies red styling for poor status", () => {
    render(<StatusIndicator status="poor" />);

    const status = screen.getByText("poor");

    expect(status).toHaveClass("bg-red-600");
    expect(status).toHaveClass("text-white");
  });

  it("handles uppercase status values", () => {
    render(<StatusIndicator status="GOOD" />);

    const status = screen.getByText("GOOD");

    expect(status).toHaveClass("bg-green-500");
    expect(status).toHaveClass("text-white");
  });

  it("handles mixed-case status values", () => {
    render(<StatusIndicator status="Needs Improvement" />);

    const status = screen.getByText("Needs Improvement");

    expect(status).toHaveClass("bg-accent-300");
    expect(status).toHaveClass("text-neutral-900");
  });
});
