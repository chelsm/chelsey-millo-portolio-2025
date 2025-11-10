import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import ProjectProfessional from './professional';
import Scolar from './scolar';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 10px)',
    height: '100%',
    display: 'flex',
    padding: '50px 0',
  },
  project__container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  project__title: {
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  project__title_subtitle: {
    textTransform: 'none',
  },
});

const Project = ({ title }: { title: string }) => {
  const classes = useStyles();

  const { state } = useThemeColors();
  const colors = state.colors;

  const projectComponent = title === 'professionnels' ? <ProjectProfessional /> : <Scolar />;

  return (
    <Box
      component={'section'}
      className={classes.root}
      sx={{
        // border: '5px solid ' + colors.primary,
        backgroundColor: colors.navBackground,
      }}
    >
      <Box
        sx={
          {
            width: {
              xs: '70%',
              sm: '90%',
              md: '80%',
            },
            margin: 'auto',
          }
        }
      >
        <Box className={classes.project__container}>
          <Box
            className={classes.project__title}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: colors.primary,
                fontSize: 24,
                fontFamily: "'Poppins-ExtraBold', sans-serif",
              }}
            >
              Mes projets
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              className={classes.project__title_subtitle}
              sx={{
                color: colors.primary,
                fontFamily: "'RougeScript-Regular', sans-serif",
                fontSize: 30,
              }}
            >
              {title}
            </Typography>
          </Box>

          {projectComponent}
        </Box>

      </Box>
    </Box>
  );
};

export default Project;
