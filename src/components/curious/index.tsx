import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import ButtonCta from '../buttons/cta';
import Arrow from '../../assets/images/decoration/arrow'

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    padding: '50px 0',
  },
  curious__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  curious__container__gitHub: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px 50px',
    borderRadius: '20px',
    width: '60%',
    padding: 50,
  },
  curious__container__decoration: {
    position: 'absolute',
    right: -75,
    top: -75,
    height: 100,
    width: 'auto',
    '@media (max-width:600px)': {
      height: 70,
      right: -50,
      top: -50,
    },
  },
});

const GitHubLink = () => {
  const classes = useStyles();

  const { state } = useThemeColors();
  const colors = state.colors;

  return (
    <Box component={'section'} className={classes.root}>
      <Box
        className={classes.curious__container}
        sx={{
          width: {
            xs: '80%',
            sm: '90%',
            md: '80%',
          },
          margin: 'auto',
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: 40,
            fontFamily: 'Times New Roman, serif',
            color: colors.primary,
            letterSpacing: 1,
            fontWeight: 600,
            '@media (max-width:600px)': {
              fontSize: 32,
            },
          }}
        >
          Curieux d'en voir plus ?
        </Typography>
        <Box
          className={classes.curious__container__gitHub}
          sx={{
            border: '3px dashed ' + colors.orange,
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular, sans-serif',
              color: colors.primary,
              letterSpacing: 1,
              fontWeight: 600,
              width: '100%',
            }}
          >
            plongez dans mon code et mes projets
          </Typography>
          <ButtonCta
          readableName="mon github"
          link="https://github.com/chelsm"
          trackingName="my_github_button"
          />
          <Box
            className={classes.curious__container__decoration}
          >
            <Arrow color={colors.arrow_line} />
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default GitHubLink;
