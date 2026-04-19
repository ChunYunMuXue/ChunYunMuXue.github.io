import { eslint } from "@next/eslint-plugin-next";

export default [
  { files: ["**/*.{ts,tsx}"] },
  eslint({
    allowedDeviationLevels: [],
    treatWarningsAsErrors: false,
  }),
];
