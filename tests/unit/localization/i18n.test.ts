import { default as i18next, initializeI18next } from "@localization/index";
import { store } from "@store/index";

describe("i18next real initialization", () => {
  beforeEach(() => {
    jest.resetModules(); // Resetta i moduli caricati prima di ogni test
    jest.clearAllMocks();
  });
  it("should initialize i18next and dispatch localization", async () => {
    await initializeI18next();

    expect(i18next.isInitialized).toBe(true);
    expect(store.getState().localization.lang).toBe(i18next.language);
  });

  it("should handle initialization errors", async () => {
    jest.resetModules();
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    // Mocka solo per questo test
    jest.doMock("@store/index", () => ({
      store: {
        dispatch: jest.fn(),
        getState: jest.fn(() => ({
          localization: { lang: "en" },
        })),
      },
    }));

    jest.doMock("i18next", () => ({
      __esModule: true,
      default: {
        use: jest.fn().mockReturnThis(),
        init: jest.fn().mockRejectedValue(new Error("Init failed")),
        isInitialized: false,
        language: "en",
      },
    }));

    const { initializeI18next } = await import("@localization/index");
    const { store } = await import("@store/index");


    const dispatchMock = jest.spyOn(store, "dispatch");

    await initializeI18next();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "i18next initialization failed:",
      expect.any(Error)
    );
    expect(dispatchMock).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();

    jest.resetModules();
  });
});
