import { useContext } from "react";
import { ThemeContext } from "./themeContext";


export function useThemeColors() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeColors must be used within a ThemeProvider");
  return context;
}
