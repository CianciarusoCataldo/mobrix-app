import { store } from "@store/index"; // importa il tuo store preconfigurato
import {
  closeDrawer,
  openDrawer,
  setDarkMode,
  switchDarkMode,
  switchDrawerVisibility,
} from "@store/slices/ui"; // esempio di azione

describe("Redux ui slice", () => {
  it("setDarkMode action", () => {
    store.dispatch(setDarkMode(true));

    const state = store.getState();
    expect(state.ui.dark).toBe(true);
  });
  it("switchDarkMode action", () => {
    store.dispatch(switchDarkMode());

    const state = store.getState();
    expect(state.ui.dark).toBe(false);
  });
  it("openDrawer action", () => {
    store.dispatch(openDrawer());

    const state = store.getState();
    expect(state.ui.drawerOpen).toBe(true);
  });
  it("closeDrawer action", () => {
    store.dispatch(closeDrawer());

    const state = store.getState();
    expect(state.ui.drawerOpen).toBe(false);
  });
  it("switchDrawerVisibility action", () => {
    store.dispatch(switchDrawerVisibility());

    const state = store.getState();
    expect(state.ui.drawerOpen).toBe(true);
  });
});
