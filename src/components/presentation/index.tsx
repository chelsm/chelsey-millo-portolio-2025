import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useThemeColors } from "../../context/useThemeColors";

const useStyles = makeStyles({
  root: {
    // minHeight: "100vh",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5vh",
    padding: '50px 0',
  },
  presentation__title: {
    textTransform: "uppercase",
    textAlign: "left",
  },
  presentation: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderRadius: 41,
  },
  presentation__paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    textAlign: "justify",
    "& p": {
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
      component={"section"}
      className={classes.root}
      sx={{
      //   backgroundImage: `
      //   repeating-linear-gradient(
      //     to right, 
      //     ${colors.red_pastel} ,        
      //     ${colors.red_pastel}  60px, 
      //     ${colors.background} 60px, 
      //     ${colors.background} 120px 
      //   )
      // `,
      }}
    >
      <Box
        className={classes.presentation}
        sx={{
          // bgcolor: colors.navBackground,
          width: {
            xs: "70%",
            sm: "80%",
            md: "80%",
          },
          margin: "auto",
          "@media (max-width: 600px)": {
            margin: "30px auto",
          },
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          className={classes.presentation__title}
          sx={{
            color: colors.primary,
            fontSize: 24,
            fontFamily: "'Poppins-ExtraBold', sans-serif",
          }}
        >
          présentation
        </Typography>
        <Box className={classes.presentation__paragraphs}>
          <Typography
            variant="body2"
            sx={{
              color: colors.text,
            }}
          >
            Je m'appelle Chelsey (
            <Typography
              component="span"
              sx={{
                color: colors.text,
                fontFamily: "'Poppins-ExtraBold', sans-serif",
                fontSize: 16,
              }}
            >
              'tʃɛlsi *
            </Typography>
            ) et je viens d'obtenir un Mastère en Développement Manager Full
            Stack. Même si j'ai pu toucher à plusieurs aspects du développement,
            je m'oriente aujourd'hui vers le front-end, un univers que
            j'apprécie particulièrement.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.text,
            }}
          >
            Je suis une développeuse curieuse et attentive, toujours prête à
            découvrir de nouvelles choses et à relever des défis.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.text,
            }}
          >
            J'aime être à l'écoute et comprendre clairement ce qu'on attend de
            moi. Même sans formation spécifique en UX/UI, je prête attention aux
            détails pour rendre les interfaces claires et agréables à utiliser.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.text,
            }}
          >
            Je suis organisée et impliquée, capable de travailler efficacement
            seule comme en équipe, et toujours motivée à contribuer à des
            projets modernes et bien réalisés.
          </Typography>
        </Box>
        <Typography
          component="span"
          sx={{
            color: colors.text,
            fontFamily: "'Poppins-ExtraBold', sans-serif",
            fontSize: 16,
            textAlign: "right",
          }}
        >
          *tch + è + lsi
        </Typography>
      </Box>
    </Box>
  );
};

export default Presentation;
