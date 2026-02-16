import eslint from "@eslint/js";
import { defineConfig } from "vite";
import tseslint from "typescript-eslint";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    react(),
    tailwindcss(),
  ],
});
