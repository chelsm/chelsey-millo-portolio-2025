import { Box, Container } from "@mui/material";
import { useThemeColors } from "./context/useThemeColors";
import Navbar from "./components/navbar";
import ButtonSwitch from "./components/buttons/switch";
import Introduction from "./components/introduction";
import Presentation from "./components/presentation";
import Project from "./components/project";

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

      <Container
        maxWidth="lg"
        disableGutters
        component="main"
        sx={{
          "@media (min-width: 1200px)": {
            maxWidth: "initial",
          },
        }}
      >
        <Box>
          <Introduction />
          <Presentation />
          <Project 
            // props
            title="professionnels"
          />
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
