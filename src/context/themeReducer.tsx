import { colorsLightMode, colorsDarkMode } from "../constants/colors";

export type ThemeState = {
  darkMode: boolean;
  colors: typeof colorsLightMode;
};

export type ThemeAction =
  | { type: "TOGGLE_MODE" }
  | { type: "SET_DARK" }
  | { type: "SET_LIGHT" };

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return state.darkMode
        ? { darkMode: false, colors: colorsLightMode }
        : { darkMode: true, colors: colorsDarkMode };

    case "SET_DARK":
      return { darkMode: true, colors: colorsDarkMode };

    case "SET_LIGHT":
      return { darkMode: false, colors: colorsLightMode };

    default:
      return state;
  }
};

export const initialTheme: ThemeState = {
  darkMode: false,
  colors: colorsLightMode,
};
