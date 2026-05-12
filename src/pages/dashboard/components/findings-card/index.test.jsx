import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import FindingsCard from ".";

// Mock shared components so we only test FindingsCard behavior
vi.mock("@shared/components/badge", () => ({
  default: ({ children, type }) => (
    <span data-testid="badge" data-type={type}>
      {children}
    </span>
  ),
}));

vi.mock("@shared/components/severity-icon", () => ({
  default: ({ severity }) => (
    <span data-testid="severity-icon">{severity} icon</span>
  ),
}));

// Mock local child component
vi.mock("./details-recommendation", () => ({
  default: ({ detail, recommendation }) => (
    <div data-testid="details-recommendation">
      <p>{detail}</p>
      <p>{recommendation}</p>
    </div>
  ),
}));

// Mock local toggle button
vi.mock("./details-button-toggle", () => ({
  default: ({ isOpen, setIsOpen }) => (
    <button type="button" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "Hide details" : "Show details"}
    </button>
  ),
}));

describe("FindingsCard", () => {
  const mockFinding = {
    title: "Missing meta description",
    description: "This page does not have a meta description.",
    detail: "Meta descriptions help search engines understand the page.",
    recommendation: "Add a clear meta description between 150 and 160 characters.",
    severity: "warning",
  };

  it("renders the finding title, description, severity icon, and badge", () => {
    render(<FindingsCard {...mockFinding} />);

    expect(screen.getByText("Missing meta description")).toBeInTheDocument();
    expect(
      screen.getByText("This page does not have a meta description.")
    ).toBeInTheDocument();

    expect(screen.getByTestId("severity-icon")).toHaveTextContent(
      "warning icon"
    );

    expect(screen.getByTestId("badge")).toHaveTextContent("warning");
    expect(screen.getByTestId("badge")).toHaveAttribute(
      "data-type",
      "severity"
    );
  });

  it("does not show details and recommendation by default", () => {
    render(<FindingsCard {...mockFinding} />);

    expect(
      screen.queryByText("Meta descriptions help search engines understand the page.")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        "Add a clear meta description between 150 and 160 characters."
      )
    ).not.toBeInTheDocument();
  });

  it("shows details and recommendation when the toggle button is clicked", async () => {
    const user = userEvent.setup();

    render(<FindingsCard {...mockFinding} />);

    await user.click(screen.getByRole("button", { name: /show details/i }));

    expect(screen.getByTestId("details-recommendation")).toBeInTheDocument();
    expect(
      screen.getByText("Meta descriptions help search engines understand the page.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Add a clear meta description between 150 and 160 characters."
      )
    ).toBeInTheDocument();
  });

  it("hides details and recommendation when the toggle button is clicked again", async () => {
    const user = userEvent.setup();

    render(<FindingsCard {...mockFinding} />);

    await user.click(screen.getByRole("button", { name: /show details/i }));

    expect(screen.getByTestId("details-recommendation")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /hide details/i }));

    expect(screen.queryByTestId("details-recommendation")).not.toBeInTheDocument();
  });
});