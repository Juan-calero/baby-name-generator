module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsconfig: {
        target: "ES2017",
      },
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: [],
  moduleDirectories: ["node_modules"],
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jsdom",
};
