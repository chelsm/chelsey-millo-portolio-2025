import { Box, Button, Container } from "@mui/material";
import { useThemeColors } from "./context/themeContext";
import Navbar from "./components/navbar";
import ButtonSwitch from "./components/buttons/switch";
import Introduction from "./components/introduction";

const App = () => {
  const { state, dispatch } = useThemeColors();

  return (
    <Box
      sx={{
        bgcolor: state.colors.background,
        minHeight: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Navbar />

      <Container maxWidth="lg" disableGutters component="main">
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
            },
            margin: "auto",
          }}
        >
          <Introduction />
        </Box>
      </Container>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <ButtonSwitch darkMode={state.darkMode} dispatch={dispatch} />
      </Box>
    </Box>
  );
};

export default App;
