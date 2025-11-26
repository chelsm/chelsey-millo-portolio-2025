import { Button } from '@mui/material';
import { useThemeColors } from '../../context/useThemeColors';
import useMixPanel from '../tracking/mixPanel';

type ButtonCtaProps = {
  readableName: string;
  link: string;
  trackingName: string;
};

const ButtonCta = ({ readableName, link, trackingName }: ButtonCtaProps) => {
  const { state } = useThemeColors();
  const colors = state.colors;
  const mixPanel = useMixPanel();
  

  return (
    <Button
      variant="contained"
      href={link}
      target="_blank"
      onClick={() => {
        mixPanel.track(`cta_button_click_${trackingName}`, {
          cta: readableName,
        });
      }}
      sx={{
        textTransform: 'lowercase',
        letterSpacing: 1,
        width: 'fit-content',
        padding: '5px 15px',
        backgroundColor: colors.background_button,
        color: colors.text_button,
        fontFamily: "'Poppins-Medium', sans-serif",
        fontWeight: 800,
        fontSize: 16,
        borderRadius: 4,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: colors.primary,
          color: colors.background,
        },
      }}
    >
      {readableName}
    </Button>
  );
};

export default ButtonCta;
