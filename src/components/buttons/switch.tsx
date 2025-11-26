import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import type { ThemeAction } from "../../context/themeReducer";
import { useThemeColors } from "../../context/useThemeColors";
import useMixPanel from "../tracking/mixPanel";

type ButtonSwitchProps = {
  darkMode: boolean;
  dispatch: React.Dispatch<ThemeAction>;
};

const ButtonSwitch = ({ darkMode, dispatch }: ButtonSwitchProps) => {

  const { state  } = useThemeColors(); 
  const mixPanel = useMixPanel();
 
  const handleChange = () => {
    dispatch({ type: "TOGGLE_MODE" });
    mixPanel.track("toggle_dark_mode", {
      mode: darkMode ? "light" : "dark",
    });
  };

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
