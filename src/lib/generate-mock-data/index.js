const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

const getStatus = (score) => {
  if (score >= 75) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Poor";
};

export function generateMockData(url) {
  const uiux = getRandom(0, 100);
  const performance = getRandom(0, 100);
  const accessibility = getRandom(0, 100);
  const conversion = getRandom(0, 100);

  const overallScore = Math.round(
    (uiux + performance + accessibility + conversion) / 4,
  );

  return {
    id: url,
    analysedAt: new Date().toISOString(),

    summary: {
      websiteUrl: url,
      overallScore,
      status: getStatus(overallScore),
      insight:
        overallScore > 75
          ? "Your website performs well overall, but there are opportunities to improve the vital areas."
          : overallScore > 50
            ? "Your website has a solid foundation, but several improvements are needed across vital areas."
            : "Your website requires significant improvements to meet modern UX, performance, and conversion standards.",
    },

    scores: [
      {
        id: "ui-ux",
        title: "UI/UX",
        score: uiux,
        maxScore: 100,
        icon: "Palette",
        description: "Visual design and user experience quality",
      },
      {
        id: "performance",
        title: "Performance",
        score: performance,
        maxScore: 100,
        icon: "Gauge",
        description: "Page load speed and optimization",
      },
      {
        id: "accessibility",
        title: "Accessibility",
        score: accessibility,
        maxScore: 100,
        icon: "Accessibility",
        description: "Inclusive design and WCAG compliance",
      },
      {
        id: "conversion",
        title: "Conversion Score",
        score: conversion,
        maxScore: 100,
        icon: "TrendingUp",
        description: "SEO and conversion optimization",
      },
    ],

    findings: [
      {
        id: "ui-ux",
        title: "UI/UX Issues",
        icon: "Palette",
        items: shuffleArray([
          {
            id: "ui-1",
            title: "Inconsistent Button Styles",
            description: "Multiple button variations create visual confusion",
            severity: "critical",
            details:
              "Found multiple button styles across the page. This can make the interface feel inconsistent and reduce user trust.",
            recommendation:
              "Create a reusable button system with clear primary, secondary, and tertiary variants.",
          },
          {
            id: "ui-2",
            title: "Weak Visual Hierarchy",
            description: "Important sections do not stand out clearly",
            severity: "warning",
            details:
              "Some headings, CTAs, and content blocks have similar visual weight, making it harder for users to scan the page.",
            recommendation:
              "Improve typography scale, spacing, contrast, and CTA emphasis to guide the user’s attention.",
          },
        ]),
      },
      {
        id: "performance",
        title: "Performance Issues",
        icon: "Gauge",
        items: shuffleArray([
          {
            id: "perf-1",
            title: "Large Image Assets",
            description: "Images are not optimized",
            severity: "warning",
            details:
              "Large image files can delay page loading, especially on slower mobile networks.",
            recommendation:
              "Compress images, resize them properly, and serve modern formats like WebP or AVIF.",
          },
          {
            id: "perf-2",
            title: "Unused JavaScript",
            description: "Extra JavaScript may affect load time",
            severity: "warning",
            details:
              "Unused or unnecessary JavaScript can increase bundle size and slow down initial page rendering.",
            recommendation:
              "Remove unused dependencies, split large bundles, and lazy-load non-critical components.",
          },
        ]),
      },
      {
        id: "accessibility",
        title: "Accessibility Issues",
        icon: "Accessibility",
        items: shuffleArray([
          {
            id: "acc-1",
            title: "Missing Alt Text",
            description: "Images lack descriptive alt attributes",
            severity: "warning",
            details:
              "Some informative images may not be understandable for users relying on screen readers.",
            recommendation:
              "Add meaningful alt text for informative images and use empty alt text only for decorative images.",
          },
          {
            id: "acc-2",
            title: "Low Contrast Text",
            description: "Some text may be difficult to read",
            severity: "critical",
            details:
              "Low contrast between text and background can make content harder to read for users with visual impairments.",
            recommendation:
              "Increase text contrast and test color combinations against accessibility contrast guidelines.",
          },
        ]),
      },
      {
        id: "conversion",
        title: "Conversion Opportunities",
        icon: "TrendingUp",
        items: shuffleArray([
          {
            id: "conv-1",
            title: "Weak CTA Placement",
            description: "CTA is not prominent enough",
            severity: "warning",
            details:
              "The main call-to-action may not appear frequently enough or may not stand out visually from surrounding content.",
            recommendation:
              "Place the primary CTA in the hero section, repeat it after key content blocks, and increase visual emphasis.",
          },
          {
            id: "conv-2",
            title: "Unclear Value Proposition",
            description: "The main benefit is not communicated quickly",
            severity: "info",
            details:
              "Users may not immediately understand what the website offers or why they should take action.",
            recommendation:
              "Rewrite the hero headline and subheadline to clearly explain the offer, audience, and benefit.",
          },
        ]),
      },
    ],

    recommendations: shuffleArray([
      {
        id: "rec-1",
        title: "Optimize and compress images to WebP",
        priority: "high",
      },
      {
        id: "rec-2",
        title: "Create consistent UI components",
        priority: "high",
      },
      {
        id: "rec-3",
        title: "Improve accessibility labels",
        priority: "medium",
      },
    ]),
  };
}
