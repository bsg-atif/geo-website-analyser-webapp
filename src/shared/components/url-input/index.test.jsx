import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import URLInput from "./index";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("URLInput", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("renders the URL input and submit button", () => {
    render(<URLInput />);

    expect(screen.getByPlaceholderText("Enter your URL")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /analyse website/i }),
    ).toBeInTheDocument();
  });

  it("renders the initialURL value when provided", () => {
    render(<URLInput initialURL="https://example.com" />);

    const input = screen.getByPlaceholderText("Enter your URL");

    expect(input).toHaveValue("https://example.com");
  });

  it("redirects to dashboard with the entered URL when form is submitted", async () => {
    const user = userEvent.setup();

    render(<URLInput />);

    const input = screen.getByPlaceholderText("Enter your URL");
    const button = screen.getByRole("button", { name: /analyse website/i });

    await user.type(input, "https://abc.com");
    await user.click(button);

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith(
      "/dashboard?url=https%3A%2F%2Fabc.com",
    );
  });

  it("redirects using the initialURL value if submitted without changing input", async () => {
    const user = userEvent.setup();

    render(<URLInput initialURL="https://conneqtedagents.com" />);

    const button = screen.getByRole("button", { name: /analyse website/i });

    await user.click(button);

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith(
      "/dashboard?url=https%3A%2F%2Fconneqtedagents.com",
    );
  });
});
