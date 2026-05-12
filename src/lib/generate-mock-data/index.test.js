import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { generateMockData } from ".";

describe("generateMockData", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-05-12T10:30:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("returns mock data with the provided url as id and websiteUrl", () => {
    const data = generateMockData("https://example.com");

    expect(data.id).toBe("https://example.com");
    expect(data.summary.websiteUrl).toBe("https://example.com");
  });

  it("returns analysedAt as the current ISO date", () => {
    const data = generateMockData("https://example.com");

    expect(data.analysedAt).toBe("2026-05-12T10:30:00.000Z");
  });

  it("returns scores between 0 and 100", () => {
    const data = generateMockData("https://example.com");

    data.scores.forEach((scoreItem) => {
      expect(scoreItem.score).toBeGreaterThanOrEqual(0);
      expect(scoreItem.score).toBeLessThanOrEqual(100);
      expect(scoreItem.maxScore).toBe(100);
    });
  });

  it("returns the expected score categories", () => {
    const data = generateMockData("https://example.com");

    expect(data.scores).toHaveLength(4);

    expect(data.scores).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "ui-ux",
          title: "UI/UX",
          icon: "Palette",
        }),
        expect.objectContaining({
          id: "performance",
          title: "Performance",
          icon: "Gauge",
        }),
        expect.objectContaining({
          id: "accessibility",
          title: "Accessibility",
          icon: "Accessibility",
        }),
        expect.objectContaining({
          id: "conversion",
          title: "Conversion Score",
          icon: "TrendingUp",
        }),
      ]),
    );
  });

  it("calculates overallScore as the average of all four scores", () => {
    const data = generateMockData("https://example.com");

    const calculatedAverage = Math.round(
      data.scores.reduce((sum, item) => sum + item.score, 0) /
        data.scores.length,
    );

    expect(data.summary.overallScore).toBe(calculatedAverage);
  });

  it("returns Good status when overall score is 75 or above", () => {
    vi.spyOn(Math, "random")
      // scores: 80, 80, 80, 80
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.8);

    const data = generateMockData("https://example.com");

    expect(data.summary.overallScore).toBe(80);
    expect(data.summary.status).toBe("Good");
  });

  it("returns Needs Improvement status when overall score is between 50 and 74", () => {
    vi.spyOn(Math, "random")
      // scores: 60, 60, 60, 60
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6);

    const data = generateMockData("https://example.com");

    expect(data.summary.overallScore).toBe(60);
    expect(data.summary.status).toBe("Needs Improvement");
  });

  it("returns Poor status when overall score is below 50", () => {
    vi.spyOn(Math, "random")
      // scores: 30, 30, 30, 30
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.3);

    const data = generateMockData("https://example.com");

    expect(data.summary.overallScore).toBe(30);
    expect(data.summary.status).toBe("Poor");
  });

  it("returns the correct insight for a high score", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.8);

    const data = generateMockData("https://example.com");

    expect(data.summary.insight).toBe(
      "Your website performs well overall, but there are opportunities to improve the vital areas.",
    );
  });

  it("returns the correct insight for a medium score", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6);

    const data = generateMockData("https://example.com");

    expect(data.summary.insight).toBe(
      "Your website has a solid foundation, but several improvements are needed across vital areas.",
    );
  });

  it("returns the correct insight for a low score", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.3);

    const data = generateMockData("https://example.com");

    expect(data.summary.insight).toBe(
      "Your website requires significant improvements to meet modern UX, performance, and conversion standards.",
    );
  });

  it("returns all finding groups with items", () => {
    const data = generateMockData("https://example.com");

    expect(data.findings).toHaveLength(4);

    data.findings.forEach((group) => {
      expect(group).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          title: expect.any(String),
          icon: expect.any(String),
          items: expect.any(Array),
        }),
      );

      expect(group.items.length).toBeGreaterThan(0);

      group.items.forEach((item) => {
        expect(item).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            severity: expect.any(String),
            details: expect.any(String),
            recommendation: expect.any(String),
          }),
        );
      });
    });
  });

  it("returns recommendations with title and priority", () => {
    const data = generateMockData("https://example.com");

    expect(data.recommendations).toHaveLength(3);

    data.recommendations.forEach((recommendation) => {
      expect(recommendation).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          title: expect.any(String),
          priority: expect.any(String),
        }),
      );
    });
  });
});
