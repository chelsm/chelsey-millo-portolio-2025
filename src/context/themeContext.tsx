import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import {
  themeReducer,
  initialTheme,
  type ThemeState,
  type ThemeAction,
} from "./themeReducer";

type ThemeContextType = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeColors() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeColors must be used within a ThemeProvider");
  return context;
}
