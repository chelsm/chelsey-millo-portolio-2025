import { createContext } from 'react';
import { type ThemeState, type ThemeAction } from './themeReducer';

export type ThemeContextType = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
