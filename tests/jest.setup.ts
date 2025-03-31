/* eslint-disable @typescript-eslint/no-require-imports */
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

// Mock per il router di Next.js
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
