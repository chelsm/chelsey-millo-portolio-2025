import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import { db } from '../../firebase';
import { useProjects } from '../../context/useProjects';
import { push, ref, set } from 'firebase/database';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 10px)',
    height: '100%',
     display: 'flex',
  },
  project: {
    border: '5px solid',
  },
  project__container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    padding: 30,
  },
  project__container_left: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '40%',
  },
  project__container_right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '60%',
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

  const { projects, loading } = useProjects();

  console.log('loading', loading);
  console.log('projects', projects);

  return (
    <Box
      component={'section'}
      className={classes.root}
      sx={{
        border: '5px solid ' + colors.primary,
        backgroundColor: colors.navBackground,
      }}
    >
      <Box
        className={classes.project}
        sx={{
          width: {
            // xs: "100%",
            sm: '90%',
            md: '80%',
          },
          margin: 'auto',
        }}
      >
        <Box className={classes.project__container}>
          <Box className={classes.project__container_left}>
            <Box className={classes.project__title}>
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
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: colors.primary,
                fontFamily: "'Poppins-Regular', sans-serif",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              Au fil de mes expériences en entreprise, j’ai eu l’occasion de contribuer à différents
              projets, principalement autour de la conception et du développement d’interfaces.
            </Typography>
          </Box>
          <Box
            className={classes.project__container_right}
            sx={{
              border: '5px solid ' + colors.primary,
              padding: 2,
              color: colors.primary,
            }}
          >
            text
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
