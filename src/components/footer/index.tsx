//footer
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';      

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
});

const Footer = () => {
  const classes = useStyles();
  const { state } = useThemeColors();
  const colors = state.colors;

  return (
    <Box component={'footer'} className={classes.root}
        sx={{
            backgroundColor: colors.background_footer,
        }}
    >
      <Typography
        variant="body2"
        sx={{
          color: colors.primary,
          fontFamily: "'Poppins-Regular', sans-serif",
        }}
      >
        {'© 2025 Chelsey Millo. Tous droits réservés.'}
      </Typography>
    </Box>
  );
};

export default Footer;
