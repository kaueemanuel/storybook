module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "promise",
    "react-refresh",
    "react",
    "@typescript-eslint",
    "import-helpers",
    "react-hooks",
    "prettier"
  ],
  settings: {
    react: {
      version: "latest",
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true
      },
    ],
    "no-console": [2, { "allow": ["log", "error", "groupCollapsed", "group"] }],
    "no-extra-boolean-cast": 0,
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-callback-in-promise": "error",
    "promise/no-return-in-finally": "error",
    "prefer-arrow-callback": "error",
    "linebreak-style": "off",
    "semi": ["error", "never"],
    "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": 0,
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react/",
          "module",
          "/^@/",
          ["parent", "sibling", "index"],
          "/^./styles/"
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  },
}