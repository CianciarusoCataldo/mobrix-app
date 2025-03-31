/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require("next/jest");
const { resolve } = require("path");

const createJestConfig = nextJest({ dir: resolve("./") });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  rootDir: "../",
  moduleNameMapper: {
    "^@root/(.*)$": "<rootDir>/$1",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@localization/(.*)$": "<rootDir>/src/localization/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/pages/**",
    "!src/styles/**",
  ],
  modulePathIgnorePatterns: ["<rootDir>/pages/_app.tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

module.exports = createJestConfig(customJestConfig);
