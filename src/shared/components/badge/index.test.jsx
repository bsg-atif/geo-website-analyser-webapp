import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("Badge", () => {
  it("renders the badge text", () => {
    render(<Badge type="priority">High</Badge>);

    expect(screen.getByText("High")).toBeInTheDocument();
  });

  it("applies the correct class for high priority", () => {
    render(<Badge type="priority">High</Badge>);

    const badge = screen.getByText("High");

    expect(badge).toHaveClass("bg-red-600");
  });

  it("applies the correct class for medium priority", () => {
    render(<Badge type="priority">Medium</Badge>);

    const badge = screen.getByText("Medium");

    expect(badge).toHaveClass("bg-accent-500");
    expect(badge).toHaveClass("text-neutral-900");
  });

  it("applies the correct class for critical severity", () => {
    render(<Badge type="severity">Critical</Badge>);

    const badge = screen.getByText("Critical");

    expect(badge).toHaveClass("bg-red-600");
  });

  it("applies the correct class for warning severity", () => {
    render(<Badge type="severity">Warning</Badge>);

    const badge = screen.getByText("Warning");

    expect(badge).toHaveClass("bg-accent-500");
    expect(badge).toHaveClass("text-neutral-900");
  });

  it("applies the correct class for info severity", () => {
    render(<Badge type="severity">Info</Badge>);

    const badge = screen.getByText("Info");

    expect(badge).toHaveClass("bg-neutral-100");
    expect(badge).toHaveClass("text-neutral-900");
  });

  it("handles lowercase children values", () => {
    render(<Badge type="severity">critical</Badge>);

    const badge = screen.getByText("critical");

    expect(badge).toHaveClass("bg-red-600");
  });

  it("applies the shared base badge classes", () => {
    render(<Badge type="priority">High</Badge>);

    const badge = screen.getByText("High");

    expect(badge).toHaveClass("inline-block");
    expect(badge).toHaveClass("py-1");
    expect(badge).toHaveClass("rounded-full");
    expect(badge).toHaveClass("px-2");
    expect(badge).toHaveClass("text-[10px]");
    expect(badge).toHaveClass("font-bold");
    expect(badge).toHaveClass("capitalize");
  });
});
