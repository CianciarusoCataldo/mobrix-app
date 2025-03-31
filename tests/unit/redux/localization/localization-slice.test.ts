import { store } from "@store/index";
import { initLocalization, setLanguage } from "@store/slices/localization";

describe("Redux localization slice", () => {
  it("initLocalization action", () => {
    store.dispatch(initLocalization({ lang: "en" }));

    const state = store.getState();
    expect(state.localization.lang).toBe("en");
  });

  it("setLanguage action", () => {
    store.dispatch(setLanguage("en"));

    const state = store.getState();
    expect(state.localization.lang).toBe("en");
  });
});
