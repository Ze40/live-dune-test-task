import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/style/variables.scss" as *;`, // Глобальный импорт
      },
    },
  },
  base: "/live-dune-test-task",
  publicDir: "public",
});
