import { Button } from '@mui/material';
import { useThemeColors } from '../../context/useThemeColors';

type ButtonCtaProps = {
  readableName: string;
  link: string;
};

const ButtonCta = ({ readableName, link }: ButtonCtaProps) => {
  const { state } = useThemeColors();
  const colors = state.colors;

  return (
    <Button
      variant="contained"
      href={link}
      target="_blank"
      sx={{
        width: 'fit-content',
        padding: '5px 15px',
        backgroundColor: colors.background,
        color: colors.primary,
        fontFamily: "'Poppins-ExtraBold', sans-serif",
        textTransform: 'none',
        fontSize: 16,
        borderRadius: 50,
        boxShadow: 'none',

        '&:hover': {
          boxShadow: 'none',
          backgroundColor: colors.primary,
          color: colors.navBackground,
        },
      }}
    >
      {readableName}
    </Button>
  );
};

export default ButtonCta;
