import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';

const useStyles = makeStyles({
  root: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5vh',
    padding: '50px 0',
  },
  presentation__container: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    borderRadius: 41,
  },
  presentation__title: {
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  presentation__paragraph: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    textAlign: 'justify',
    '& p': {
      fontFamily: "'Poppins-Regular', sans-serif",
      fontSize: 16,
      lineHeight: 1.6,
    },
  },
});

const Presentation = () => {
  const classes = useStyles();
  const { state } = useThemeColors();
  const colors = state.colors;

  return (
    <Box
      id="présentation"
      component={'section'}
      className={classes.root}
      sx={{
        bgcolor: colors.background_alt,
      }}
    >
      <Box
        className={classes.presentation__container}
        sx={{
          width: {
            xs: '80%',
            sm: '80%',
            md: '80%',
          },
          margin: 'auto',
          '@media (max-width: 600px)': {
            margin: '30px auto',
          },
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          className={classes.presentation__title}
          sx={{
            color: colors.primary,
            fontSize: 50,
            fontFamily: "'Poppins-ExtraBold', sans-serif",
            '@media (max-width:600px)': {
              fontSize: 32,
            },
          }}
        >
          présentation
        </Typography>
        <Box className={classes.presentation__paragraph}>
          <Typography
            variant="body2"
            sx={{
              color: colors.primary,
            }}
          >
            Je m'appelle
            <Box
              component="span"
              sx={{
                fontFamily: "'Poppins-ExtraBold', sans-serif",
                textTransform: 'uppercase',
                color: colors.blue,
                margin: '0 5px',
                padding: '5px 10px',
                backgroundColor: colors.pink,
                display: 'inline-block',
                borderRadius: '10px',
                width: 'fit-content',
                transform: 'rotate(-4deg)',
              }}
            >
              Chelsey
            </Box>
            (
            <Typography
              component="span"
              sx={{
                color: colors.primary,
                fontFamily: "'Poppins-ExtraBold', sans-serif",
                fontSize: 16,
              }}
            >
              'ʃɛlsi *
            </Typography>
            ) et je viens d'obtenir un Mastère en Développement Manager Full Stack. Même si j'ai pu
            toucher à plusieurs aspects du développement, je m'oriente aujourd'hui vers le
            front-end, un univers que j'apprécie particulièrement.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.primary,
            }}
          >
            J'aime être à l'écoute et comprendre clairement ce qu'on attend de moi. Même sans
            formation spécifique en UX/UI, je prête attention aux détails pour rendre les interfaces
            claires et agréables à utiliser.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.primary,
            }}
          >
            Je suis organisée et impliquée, capable de travailler efficacement seule comme en
            équipe, et toujours motivée à contribuer à des projets modernes et bien réalisés.
          </Typography>
        </Box>
        <Typography
          component="span"
          sx={{
            color: colors.primary,
            fontFamily: "'Poppins-ExtraBold', sans-serif",
            fontSize: 16,
            textAlign: 'right',
          }}
        >
          *ch + è + lsi
        </Typography>
      </Box>
    </Box>
  );
};

export default Presentation;
