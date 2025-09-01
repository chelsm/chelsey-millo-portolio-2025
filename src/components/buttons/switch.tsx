import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import type { ThemeAction } from "../../context/themeReducer";
import { useThemeColors } from "../../context/themeContext";

type ButtonSwitchProps = {
  darkMode: boolean;
  dispatch: React.Dispatch<ThemeAction>;
};

const ButtonSwitch = ({ darkMode, dispatch }: ButtonSwitchProps) => {
  const handleChange = () => {
    dispatch({ type: "TOGGLE_MODE" });
  };

  const { state  } = useThemeColors(); 

  return (
    <FormControlLabel
      control={
        <Switch checked={darkMode} onChange={handleChange} name="button" />
      }
      label={darkMode ? "Dark Mode" : "Light Mode"}
      sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: state.colors.primary, 
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: state.colors.primary, 
        },
        '& .MuiSwitch-track': {
          backgroundColor: state.colors.primary,
        },
      }}
      slotProps={{
        typography: {
          sx: {
            fontFamily: "'Poppins-regular', sans-serif",
            textTransform: "lowercase",
            fontSize: 12,
            color: state.colors.primary 
          },
        },
      }}
    />
  );
};

export default ButtonSwitch;
