import apiClient from "lib/api/apiClient";

export default async function analyzeWebsite(url) {
  const response = await apiClient.post("/api/analyze", {
    url,
  });

  return response.data;
}
