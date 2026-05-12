import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SeverityIcon from ".";

describe("SeverityIcon", () => {
  it("renders the info icon with the correct color", () => {
    const { container } = render(<SeverityIcon severity="info" />);

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("stroke", "var(--color-neutral-100)");
    expect(icon).toHaveClass("lucide-info");
    expect(icon).toHaveClass("hidden");
    expect(icon).toHaveClass("tablet:block");
    expect(icon).toHaveClass("rounded");
    expect(icon).toHaveClass("bg-neutral-800");
    expect(icon).toHaveClass("p-2");
  });

  it("renders the warning icon with the correct color", () => {
    const { container } = render(<SeverityIcon severity="warning" />);

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("stroke", "var(--color-accent-400)");
    expect(icon).toHaveClass("lucide-triangle-alert");
  });

  it("renders the critical icon with the correct color", () => {
    const { container } = render(<SeverityIcon severity="critical" />);

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("stroke", "var(--color-red-500)");
    expect(icon).toHaveClass("lucide-circle-alert");
  });

  it("handles uppercase severity values", () => {
    const { container } = render(<SeverityIcon severity="CRITICAL" />);

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("stroke", "var(--color-red-500)");
    expect(icon).toHaveClass("lucide-circle-alert");
  });
});
