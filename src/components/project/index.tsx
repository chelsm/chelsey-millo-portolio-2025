import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import PinkNote from '../../assets/images/pink_note.png';
import EcoClikVideo from '../../assets/videos/namR_EcoClikRenov.mp4';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 10px)',
    height: '100%',
    display: 'flex',
    padding: 30,
  },
  project: {},
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
  project__informations: {},
  project__information_card: {
    backgroundImage: `url(${PinkNote})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 16,
    fontFamily: "'Pompiere-Regular', cursive",
    padding: 30,
  },
  project__information_container: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  project__information_card_1: {
    rotate: '2.5deg',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '&:hover': {
      rotate: '-2.5deg',
      transition: 'transform 3s ease-in-out',
    },
  },
  project__information_card_2: {
    rotate: '-10deg',
    '&:hover': {
      rotate: '0deg',
      transition: 'transform 3s ease-in-out',
    },
  },
  project__information_card_3: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '&:hover': {
      rotate: '10deg',
      transition: 'transform 3s ease-in-out',
    },
  },
  project__information_card_text: {
    fontFamily: "'Pompiere-Regular', cursive !important",
  },
});

const Project = ({ title }: { title: string }) => {
  const classes = useStyles();

  const { state } = useThemeColors();
  const colors = state.colors;

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
            sm: '90%',
            md: '80%',
          },
          margin: 'auto',
        }}
      >
        <Box className={classes.project__container}>
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

          <Box className={classes.project__informations}>
            <Box className={classes.project__information_container}>
              <Box
                className={`${classes.project__information_card_1} ${classes.project__information_card}`}
                sx={{
                  width: { xs: '200px', sm: '230px', md: '280px' },
                  height: { xs: '200px', sm: '230px', md: '280px' },
                }}
              >
                <Typography
                  className={classes.project__information_card_text}
                  sx={{
                    color: colors.secondary,
                    fontSize: { xs: '18px', sm: '20px', md: '20px' },
                  }}
                >
                  J’ai participé à la réalisation d’un simulateur énergétique pour les clients de La
                  Banque Postale.
                </Typography>
                <Typography
                  className={classes.project__information_card_text}
                  sx={{
                    color: colors.secondary,
                    fontSize: { xs: '18px', sm: '20px', md: '20px' },
                  }}
                >
                  Cet outil interactif permet de visualiser l’impact énergétique d’un logement et de
                  proposer des travaux adaptés selon le budget et les objectifs des utilisateurs
                </Typography>
              </Box>
              <Box
                className={`${classes.project__information_card_2} ${classes.project__information_card}`}
                sx={{
                  width: { xs: '200px', sm: '230px', md: '280px' },
                  height: { xs: '200px', sm: '230px', md: '280px' },
                }}
              >
                <Typography
                  className={classes.project__information_card_text}
                  sx={{
                    color: colors.secondary,
                    fontSize: { xs: '18px', sm: '20px', md: '20px' },
                  }}
                >
                  Exemples de fonctionnalités intégrées :
                </Typography>
                <ul
                  className={classes.project__information_card_text}
                  style={{ color: colors.secondary }}
                >
                  <li>
                    <Typography
                      className={classes.project__information_card_text}
                      sx={{
                        color: colors.secondary,
                        fontSize: { xs: '18px', sm: '20px', md: '20px' },
                      }}
                    >
                      Formulaires dynamiques liés aux données saisies.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className={classes.project__information_card_text}
                      sx={{
                        color: colors.secondary,
                        fontSize: { xs: '18px', sm: '20px', md: '20px' },
                      }}
                    >
                      Règles métiers pour fiabiliser les calculs.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      className={classes.project__information_card_text}
                      sx={{
                        color: colors.secondary,
                        fontSize: { xs: '18px', sm: '20px', md: '20px' },
                      }}
                    >
                      Système de tracking pour le suivi de l’utilisation.
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box
                className={`${classes.project__information_card_3} ${classes.project__information_card}`}
                sx={{
                  width: { xs: '200px', sm: '230px', md: '280px' },
                  height: { xs: '200px', sm: '230px', md: '280px' },
                }}
              >
                <Typography
                  className={classes.project__information_card_text}
                  sx={{
                    color: colors.secondary,
                    fontSize: { xs: '18px', sm: '20px', md: '20px' },
                  }}
                >
                  Aperçu du projet :
                </Typography>

                <video width="100%" height="auto" autoPlay controls muted loop>
                  <source src={EcoClikVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
