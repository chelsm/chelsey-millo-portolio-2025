import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import Background from '../../assets/images/background_paper.jpg';
import Navbar from '../navbar';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundBlendMode: 'multiply', 
  },
  introduction__container: {
    minHeight: 'calc(100vh - 120px)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '8vh'
  },
  introduction__presentation:{
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
    '@media (max-width:600px)': {
      gap: 5
    },
  },
  introduction__title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: 20,
    height: 115,
    '@media (max-width:600px)': {
      gap: 10,
      height: 75,
    },
  },
  introduction__title__name: {
    textAlign: 'center',
  },
});

const Introduction = () => {
  const classes = useStyles();
  const { state } = useThemeColors();
  const colors = state.colors;

  return (
    <Box component={'section'} className={classes.root}
      sx={{
        backgroundColor: colors.background_filter,
      }}
    >
      <Navbar />
      <Box
        className={classes.introduction__container}
        sx={{
          width: {
            sm: '90%',
            md: '80%',
          },
          margin: 'auto',
        }}
      >
        <Box className={classes.introduction__presentation}>
        <Box className={classes.introduction__title}>
          <Typography
            variant="subtitle1"
            variantMapping={{ subtitle1: 'p' }}
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 3,
              fontFamily: 'Arial, sans-serif',
              WebkitTextFillColor: 'transparent',
              WebkitTextStrokeWidth: 2,
              fontSize: 70,
              fontWeight: 800,
              height: 115,
              '@media (max-width:600px)': {
                fontSize: 45,
              },
            }}
          >
            hello
          </Typography>
          <Typography
            variant="subtitle1"
            variantMapping={{ subtitle1: 'p' }}
            sx={{
              fontFamily: "'RougeScript-Regular', sans-serif",
              fontSize: 80,
              color: colors.primary,
              '@media (max-width:600px)': {
                fontSize: 50,
              },
            }}
          >
            , c'est
          </Typography>
        </Box>
        <Box
          className={classes.introduction__title__name}
          sx={{
            backgroundColor: colors.pink,
            display: 'inline-block',
            padding: '5px 60px',
            borderRadius: '10px',
            width: 'fit-content',
            transform: 'rotate(-4deg)',
             transition: 'transform 0.3s ease',
            '&:hover': {
             transform: 'rotate(0deg)',
            },
            '@media (max-width:600px)': {
              padding: '5px 30px',
            },
          }}
        >
          <Typography
            variant="subtitle1"
            variantMapping={{ subtitle1: 'p' }}
            sx={{
              fontFamily: "'Poppins-ExtraBold', sans-serif",
              textTransform: 'uppercase',
              fontSize: 50,
              color: colors.blue,
              '@media (max-width:600px)': {
                fontSize: 20,
              },
            }}
          >
            Chelsey
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Times New Roman, serif',
            letterSpacing: 1,
            fontWeight: 600,
            fontSize: 55,
            color: colors.primary,
            '@media (max-width:600px)': {
              fontSize: 25,
            },
          }}
        >
          développeuse front end
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: colors.orange,
          fontFamily: "'Poppins-Medium', sans-serif",
          fontSize: 20,
          letterSpacing: 1,
          textAlign: 'center',
          maxWidth: 300,
          '@media (max-width:600px)': {
            fontSize: 15,
          },
        }}
      >
        à la recherche de nouvelles aventures en cdi
      </Typography>
    </Box>
    </Box>
  );
};

export default Introduction;
