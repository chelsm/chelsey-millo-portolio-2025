import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import ButtonCta from '../buttons/cta';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0',
  },
  contact__container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 35,
    width: '40%',
    '@media (max-width:600px)': {
      width: '50%',
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  const { state } = useThemeColors();
  const colors = state.colors;

  return (
    <Box
      id="contact"
      component={'section'}
      className={classes.root}
      sx={{
        width: {
          sm: '90%',
          md: '80%',
        },
        margin: 'auto',
      }}
    >
      <Box className={classes.contact__container}>
        <Typography
          variant="h4"
          sx={{
            color: colors.secondary,
            fontFamily: "'Poppins-ExtraBold', sans-serif",
            '@media (max-width:600px)': {
              fontSize: 30,
            },
          }}
        >
          {'merci, '}
          <Typography
            variant="h4"
            component="span"
            sx={{
              color: colors.orange,
              fontFamily: "'RougeScript-Regular', sans-serif",
              fontWeight: '800',
              fontSize: 50,
              '@media (max-width:600px)': {
                fontSize: 45,
              },
            }}
          >
            bye !
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: colors.orange,
            fontFamily: "'Poppins-Regular', sans-serif",
            fontSize: 16,
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          Mon portfolio se termine ici… et j’aimerais écrire la suite avec une belle équipe en CDI.
        </Typography>
        <ButtonCta
          readableName="me contacter"
          link="mailto:chelseym.pro@gmail.com"
          trackingName="contact_me_button"
        />
      </Box>
    </Box>
  );
};

export default Contact;
