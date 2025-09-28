import { useReducer } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import {
  themeReducer,
  initialTheme,
} from "./themeReducer";
import { ThemeContext } from "./themeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  const muiTheme = createTheme({
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: {
        color: state.colors.primary,
        fontFamily: "'Poppins-ExtraBold', sans-serif",
        lineHeight: 1.2,
        fontSize: "5rem",
        '@media (max-width:900px)': {
          fontSize: "3rem",
        },
        '@media (max-width:600px)': {
          fontSize: "2rem",
        },
      },
      subtitle1: {
        fontSize: "1.7rem",
        color: state.colors.primary,
        
      },
      body1: {
        fontSize: "1.7rem",
        color: state.colors.primary,
       
      },
      
    },
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
