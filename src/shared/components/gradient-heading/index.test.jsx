import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GradientHeading from ".";

describe("GradientHeading", () => {
  it("renders the heading text", () => {
    render(<GradientHeading title="Analyze Your Website" />);

    expect(
      screen.getByRole("heading", {
        name: "Analyze Your Website",
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("applies the expected gradient heading classes", () => {
    render(<GradientHeading title="Gradient Heading" />);

    const heading = screen.getByRole("heading", {
      name: "Gradient Heading",
      level: 1,
    });

    expect(heading).toHaveClass("text-transparent");
    expect(heading).toHaveClass("bg-clip-text");
    expect(heading).toHaveClass("bg-linear-to-r");
    expect(heading).toHaveClass("from-neutral-0");
    expect(heading).toHaveClass("to-secondary-300");
  });
});
