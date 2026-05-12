import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    globals: true,

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],

      include: ["src/**/*.{js,jsx}"],

      exclude: [
        "src/**/*.test.{js,jsx}",
        "src/**/*.spec.{js,jsx}",

        "src/**/page.{js,jsx}",
        "src/**/layout.{js,jsx}",
        "src/**/loading.{js,jsx}",
        "src/**/error.{js,jsx}",
        "src/**/not-found.{js,jsx}",

        "src/pages/**/constants/**",
        "src/app/api/*",
      ],
    },
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});
