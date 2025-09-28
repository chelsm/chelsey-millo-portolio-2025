import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
  },
  introduction: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5vh",
  }
});

const Introduction = () => {
  const classes = useStyles();

  return (
    <Box
      component={"section"}
      className={classes.root}
      sx={{
        width: {
          // xs: "100%",
          sm: "90%",
          md: "80%",
        },
        margin: "auto",
      }}
    >
      <Box className={classes.introduction}>
        <Typography variant="subtitle1" variantMapping={{ subtitle1: "p" }}>
          hello , je m'appelle Chelsey
          <br />
          et je suis
        </Typography>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          Développeuse
          <br />
          Front End
        </Typography>
        <Typography variant="body1">
          à la recherche de nouvelles aventures en cdi
        </Typography>
      </Box>
    </Box>
  );
};

export default Introduction;
