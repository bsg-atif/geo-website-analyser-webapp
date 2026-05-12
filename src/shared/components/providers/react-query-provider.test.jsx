import { render, screen } from "@testing-library/react";
import { useQueryClient } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import ReactQueryClientProvider from "./react-query-provider";

vi.mock("@tanstack/react-query-devtools", () => ({
  ReactQueryDevtools: () => (
    <div data-testid="react-query-devtools">React Query Devtools</div>
  ),
}));

function TestChild() {
  const queryClient = useQueryClient();

  return (
    <div>
      <p>Child Component</p>
      <p data-testid="query-client-status">
        {queryClient ? "Query client available" : "No query client"}
      </p>
    </div>
  );
}

describe("ReactQueryClientProvider", () => {
  it("renders children", () => {
    render(
      <ReactQueryClientProvider>
        <p>Hello from child</p>
      </ReactQueryClientProvider>,
    );

    expect(screen.getByText("Hello from child")).toBeInTheDocument();
  });

  it("provides a query client to child components", () => {
    render(
      <ReactQueryClientProvider>
        <TestChild />
      </ReactQueryClientProvider>,
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
    expect(screen.getByTestId("query-client-status")).toHaveTextContent(
      "Query client available",
    );
  });

  it("renders React Query Devtools", () => {
    render(
      <ReactQueryClientProvider>
        <p>App Content</p>
      </ReactQueryClientProvider>,
    );

    expect(screen.getByTestId("react-query-devtools")).toBeInTheDocument();
    expect(screen.getByTestId("react-query-devtools")).toHaveTextContent(
      "React Query Devtools",
    );
  });
});
