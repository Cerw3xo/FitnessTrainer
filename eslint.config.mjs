import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const nextConfig = compat.extends("next/core-web-vitals", "next/typescript");
const config = [
  {
    ignores: [
      ".next/**",
      "next-env.d.ts",
      "node_modules/**",
      "out/**",
      "components/*.module.css",
      "components/*.module.css.map",
      "styles/globals.css",
      "styles/globals.css.map",
    ],
  },
  ...nextConfig,
];

export default config;
