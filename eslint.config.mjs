import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Disable common annoyances
      "react/no-unescaped-entities": "off",

      // ✅ Make unused vars a warning instead of an error
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
