import { generateMockData } from "lib/generate-mock-data";
import { normalizeUrl } from "lib/normalized-url";

export async function POST(req) {
  try {
    const body = await req.json();
    const url = normalizeUrl(body.url);

    await new Promise((res) => setTimeout(res, 3000));

    if (!url) {
      return Response.json({ error: "URL is required" }, { status: 400 });
    }

    const data = generateMockData(url);

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong while analyzing the website." },
      { status: 500 },
    );
  }
}
