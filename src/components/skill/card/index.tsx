import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../../context/useThemeColors';
import StarIcon from '../../../assets/images/decoration/star.svg';
import { pinIcons } from '../../../utils/pinsIcons';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '200px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: '50px 35px 35px',
    borderRadius: '10px',
    transition: 'transform .25s ease',
  },
});

const Card = (props: {
  title: string;
  skillList: string[];
  pins: string;
  cardColor: string;
  rotatation: string;
  top?: string;
  getZIndex: () => number;
}) => {
  const classes = useStyles();
  const { state } = useThemeColors();
  const colors = state.colors;

  const [zIndex, setZIndex] = useState(1);
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      className={classes.root}
      onMouseEnter={() => {
        const newZ = props.getZIndex();
        setZIndex(newZ);
        setIsHover(true);
      }}
       onMouseLeave={() => setIsHover(false)}
      sx={{
        bgcolor: props.cardColor,
        zIndex: zIndex,
        top: props.top ? props.top : '0px',
        transform: isHover
        ? 'rotate(0deg)'                  
        : `rotate(${props.rotatation})`,  
        boxShadow: isHover ? '0 10px 25px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.1)',
        width: isHover ? 220 : 200,
        height: isHover ? 320 : 300,
        '@media (max-width:600px)': {
          top: '0px',
          zIndex: '1'
        }
      }}
    >
      <Box
        component="img"
        src={pinIcons[props.pins]}
        alt={props.pins + ' icon'}
        sx={{
          position: 'absolute',
          top: -50,
          left: 'calc(50% - 50px)',
          width: 100,
          height: 100,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          textAlign: 'left',
          color: colors.white,
          fontFamily: "'Poppins-ExtraBold', sans-serif",
          fontSize: 24,
          textTransform: 'lowercase',
        }}
      >
        {props.title}
      </Typography>
      <Box
        sx={{
          background: colors.background,
          width: '100%',
          height: 4,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <List>
          {props.skillList.map((skillItem, index) => (
            <ListItem
              key={index}
              sx={{
                paddingLeft: 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 30,
                }}
              >
                <Box
                  component="img"
                  src={StarIcon}
                  alt="star icon"
                  sx={{ width: 18, height: 18 }}
                />
              </ListItemIcon>

              <Typography
                sx={{
                  fontFamily: "'Poppins-Medium', sans-serif",
                  fontSize: 40,
                  color: colors.white,
                  textTransform: 'lowercase',
                }}
              >
                {skillItem}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Card;
