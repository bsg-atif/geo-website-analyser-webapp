import { describe, expect, it } from "vitest";
import { normalizeUrl } from "./index";

describe("normalizeUrl", () => {
  it.each([
    ["empty string", "", ""],
    ["null", null, ""],
    ["undefined", undefined, ""],
    ["whitespace only", "   ", ""],
  ])("returns an empty string for %s", (_label, input, expected) => {
    expect(normalizeUrl(input)).toBe(expected);
  });

  it("trims whitespace and lowercases the URL", () => {
    expect(normalizeUrl("  EXAMPLE.COM/Page  ")).toBe(
      "https://example.com/page",
    );
  });

  it("adds protocol when there is none", () => {
    expect(normalizeUrl("example.com")).toBe("https://example.com");
  });

  it.each([
    ["http://example.com", "http://example.com"],
    ["https://example.com", "https://example.com"],
  ])("preserves an existing protocol for %s", (input, expected) => {
    expect(normalizeUrl(input)).toBe(expected);
  });

  it("removes one trailing slash", () => {
    expect(normalizeUrl("https://example.com/")).toBe("https://example.com");
    expect(normalizeUrl("example.com/path/")).toBe("https://example.com/path");
  });
});
