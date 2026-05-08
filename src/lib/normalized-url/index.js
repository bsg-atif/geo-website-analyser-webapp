export function normalizeUrl(url) {
  if (!url) return "";

  let normalized = url.trim().toLowerCase();

  if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
    normalized = `https://${normalized}`;
  }

  normalized = normalized.replace(/\/$/, "");

  return normalized;
}
