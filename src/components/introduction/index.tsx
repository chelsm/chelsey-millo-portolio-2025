import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  introduction: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "calc(80vh - 80px)",
    gap: "5vh",
  },
});

const Introduction = () => {
  const classes = useStyles();

  return (
    <section className={classes.introduction}>
      <Typography variant="subtitle1">
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
    </section>
  );
};

export default Introduction;
