import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("Request is sent");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const normalizedError = {
      message: "Something went wrong. Please try again.",
      status: null,
      data: null,
      isNetworkError: false,
    };

    if (error.response) {
      normalizedError.status = error.response.status;
      normalizedError.data = error.response.data;
      normalizedError.message =
        error.response.data?.message ||
        error.response.data?.error ||
        `Request failed with status ${error.response.status}`;
    } else if (error.request) {
      normalizedError.isNetworkError = true;
      normalizedError.message = "Network error. Please check your connection.";
    } else {
      normalizedError.message = error.message;
    }

    if (process.env.NODE_ENV === "development") {
      console.error("API Error:", normalizedError);
    }

    return Promise.reject(normalizedError);
  }
);

export default apiClient;
