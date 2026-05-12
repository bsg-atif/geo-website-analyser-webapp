import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from ".";

vi.mock("../branding/brand-logo", () => ({
  default: () => <div data-testid="brand-logo">Brand Logo</div>,
}));

describe("Header", () => {
  it("renders the header element", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it("renders the BrandLogo component", () => {
    render(<Header />);

    expect(screen.getByTestId("brand-logo")).toBeInTheDocument();
    expect(screen.getByText("Brand Logo")).toBeInTheDocument();
  });

  it("applies the correct layout classes to the header", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toHaveClass("bg-primary-600");
    expect(header).toHaveClass("shadow-lg");
    expect(header).toHaveClass("shadow-primary-600");
  });

  it("applies the correct wrapper classes to the inner main element", () => {
    render(<Header />);

    const main = screen.getByTestId("brand-logo").closest("main");

    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("wrapper");
    expect(main).toHaveClass("h-24");
    expect(main).toHaveClass("flex");
    expect(main).toHaveClass("items-center");
  });
});
