import { Box, Container } from '@mui/material';
import { useThemeColors } from './context/useThemeColors';
import ButtonSwitch from './components/buttons/switch';
import Introduction from './components/introduction';
import Presentation from './components/presentation';
import Project from './components/project';
import Curious from './components/curious';
import FlowerDecoration from './assets/images/decoration/flower_orange_big.svg';
import { useEffect, type JSX } from 'react';
import Skill from './components/skill';
import Contact from './components/contact';
import Footer from './components/footer';
import useMixPanel from './components/tracking/mixPanel';

const App = () => {
  const { state, dispatch } = useThemeColors();
  const mixPanel = useMixPanel();

  useEffect(() => {
    mixPanel.track('connection', {
      page: 'portfolio',
    });
  }, [mixPanel]);

  const FlowerRender: () => JSX.Element = () => {
    return (
      <Box
        component={'img'}
        src={FlowerDecoration}
        alt="décoration fleur"
        sx={{
          height: 150,
          width: 150,
          position: 'absolute',
          top: 'calc(100vh - 75px)',
          left: 'calc(50% - 75px)',
          zIndex: 1,
          transition: 'transform 0.3s linear',
          '&:hover': {
            animation: 'spin 3s linear infinite',
          },
          '@keyframes spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          '@media (max-width:600px)': {
            height: 100,
            width: 100,
            top: 'calc(100vh - 50px)',
            left: 'calc(50% - 50px)',
          },
        }}
      />
    );
  };
  return (
    <Box
      sx={{
        bgcolor: state.colors.background,
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        component="main"
        sx={{
          '@media (min-width: 1200px)': {
            maxWidth: 'initial',
          },
        }}
      >
        <Box>
          <Introduction />
          <FlowerRender />
          <Presentation />
          <Project title="professionnels" />
          <Project title="scolaires & personnels" />
          <Curious />
          <Skill />
          <Contact />
          <Footer />
        </Box>
      </Container>
      <Box
        sx={{
          position: 'fixed',
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
