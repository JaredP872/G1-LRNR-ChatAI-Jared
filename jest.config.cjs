module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest", // Ensure Jest properly transforms modern JS & JSX
  },
  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react)", // Ensure Jest transforms lucide-react
  ],
  moduleNameMapper: {
    "^lucide-react$": "<rootDir>/node_modules/lucide-react", // ✅ Correct module resolution
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // ✅ Mock styles
  },
  extensionsToTreatAsEsm: [".jsx"], // Ensure Jest treats JSX files as ES Modules
};
