import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ScoreCard from ".";

vi.mock("./progress-bar", () => ({
  default: ({ score }) => (
    <div data-testid="progress-bar">Progress score: {score}</div>
  ),
}));

describe("ScoreCard", () => {
  it("renders the score card title", () => {
    render(
      <ScoreCard
        title="SEO"
        score={85}
        description="Your SEO score is strong."
      />,
    );

    expect(screen.getByText("SEO")).toBeInTheDocument();
  });

  it("renders the score out of 100", () => {
    render(
      <ScoreCard
        title="Performance"
        score={72}
        description="Your performance score needs some improvement."
      />,
    );

    expect(screen.getByText("72")).toBeInTheDocument();
    expect(screen.getByText(/\/ 100/i)).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(
      <ScoreCard
        title="Accessibility"
        score={91}
        description="Your accessibility score is excellent."
      />,
    );

    expect(
      screen.getByText("Your accessibility score is excellent."),
    ).toBeInTheDocument();
  });

  it("passes the score to the ProgressBar component", () => {
    render(
      <ScoreCard
        title="Best Practices"
        score={64}
        description="Some best practice issues were found."
      />,
    );

    expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
    expect(screen.getByTestId("progress-bar")).toHaveTextContent(
      "Progress score: 64",
    );
  });

  it("renders correctly with a low score", () => {
    render(
      <ScoreCard
        title="Security"
        score={28}
        description="Several security issues were detected."
      />,
    );

    expect(screen.getByText("Security")).toBeInTheDocument();
    expect(screen.getByText("28")).toBeInTheDocument();
    expect(screen.getByTestId("progress-bar")).toHaveTextContent(
      "Progress score: 28",
    );
  });
});
