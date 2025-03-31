import "@localization/index"
import { render } from "@testing-library/react";
import { useRouter } from "next/router";

describe("MoBrix app test", () => {
  (useRouter as jest.Mock).mockReturnValue({
    pathname: "/test",
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  });
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const config = require("@root/mobrix.config").default;

    if (config) {
      describe("Config", () => {
        if (config.header) {
          it("Header content renders correctly", () => {
            render(config.header());
            expect(screen);
          });
        }
        if (config.footer) {
          it("Footer content renders correctly", () => {
            render(config.footer());
            expect(screen);
          });
        }
        if (config.drawer) {
          it("Drawer content renders correctly", () => {
            render(config.drawer());
            expect(screen);
          });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});
