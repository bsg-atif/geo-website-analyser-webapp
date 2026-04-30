const ALLOWED_URLS = [
  "http://abc.com",
  "https://example.com",
  "http://connectqagents.com",
];

const ANALYSIS_PROFILES = {
  "http://abc.com": [
    {
      overallScore: 78,
      status: "Good",
      insight:
        "Your website shows strong performance metrics, but UX consistency and conversion flow can be improved.",
      scores: { ux: 82, performance: 86, accessibility: 75, conversion: 68 },
    },
    {
      overallScore: 64,
      status: "Needs Work",
      insight:
        "The site has a clear structure, but slow-loading assets and unclear calls-to-action may reduce engagement.",
      scores: { ux: 70, performance: 58, accessibility: 66, conversion: 61 },
    },
    {
      overallScore: 88,
      status: "Great",
      insight:
        "The website performs well across key areas, with only minor improvements needed in accessibility and conversion.",
      scores: { ux: 90, performance: 92, accessibility: 82, conversion: 86 },
    },
  ],

  "https://example.com": [
    {
      overallScore: 84,
      status: "Great",
      insight:
        "This website has strong page structure, clean navigation, and solid performance across most categories.",
      scores: { ux: 87, performance: 91, accessibility: 80, conversion: 78 },
    },
    {
      overallScore: 72,
      status: "Good",
      insight:
        "The website is usable and visually clear, but accessibility improvements and stronger CTAs would improve results.",
      scores: { ux: 76, performance: 74, accessibility: 68, conversion: 70 },
    },
  ],

  "http://conneqtedagents.com": [
    {
      overallScore: 71,
      status: "Good",
      insight:
        "The website has a solid foundation, but performance optimization and clearer user journeys should be prioritized.",
      scores: { ux: 75, performance: 66, accessibility: 73, conversion: 69 },
    },
    {
      overallScore: 59,
      status: "Needs Work",
      insight:
        "Several important UX and accessibility issues may affect trust, readability, and conversion performance.",
      scores: { ux: 62, performance: 55, accessibility: 58, conversion: 60 },
    },
  ],
};

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomizeScore(score) {
  const offset = Math.floor(Math.random() * 7) - 3; // -3 to +3
  return Math.max(0, Math.min(100, score + offset));
}

function formatScores(scores) {
  return Object.entries(scores).map(([id, score]) => ({
    id,
    score: randomizeScore(score),
  }));
}

export async function GET(request) {
  const { url } = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!url) {
    return Response.json(
      { message: "Website URL is required." },
      { status: 400 },
    );
  }

  if (!ALLOWED_URLS.includes(url)) {
    return Response.json(
      {
        message:
          "This demo only supports http://abc.com, https://example.com, and http://connectqagents.com.",
      },
      { status: 400 },
    );
  }

  const selectedProfile = getRandomItem(ANALYSIS_PROFILES[url]);

  const randomizedOverallScore = randomizeScore(selectedProfile.overallScore);

  return Response.json({
    websiteUrl: url,
    overallScore: randomizedOverallScore,
    status: selectedProfile.status,
    insight: selectedProfile.insight,
    scores: formatScores(selectedProfile.scores),
  });
}
