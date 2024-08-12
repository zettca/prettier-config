/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  overrides: [
    {
      files: "pnpm-lock.yaml",
      options: {
        rangeEnd: 0,
      },
    },
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "^react$",
    "^react-.*",
    "<THIRD_PARTY_MODULES>",
    "^~/(.*)$",
    "^#/(.*)$",
    "^[./]",
  ],
};
