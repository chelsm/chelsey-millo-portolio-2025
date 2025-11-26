import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import skillsData from '../../data/skill.json';
import type { SkillsData } from '../../types';
import Card from './card';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5vh',
    padding: '50px 0',
  },
  skill__container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  skill__title: {
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  skill_paragraph: {
    display: 'flex',
    flexDirection: 'column',
    gap: 70,
    textAlign: 'justify',
    '& p': {
      fontFamily: "'Poppins-Regular', sans-serif",
      fontSize: 16,
      lineHeight: 1.6,
    },
  },
  card__container: {
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Skill = () => {
  const classes = useStyles();

  const { state } = useThemeColors();
  const colors = state.colors;

  const data = skillsData as SkillsData;

  const [zCounter, setZCounter] = useState(1);

  return (
    <Box
      id="compétences"
      component={'section'}
      className={classes.root}
      sx={{
        bgcolor: colors.background_alt,
      }}
    >
      <Box
        sx={{
          width: {
            xs: '80%',
            sm: '90%',
            md: '80%',
          },
          margin: 'auto',
        }}
      >
        <Box className={classes.skill__container}>
          <Box className={classes.skill__title}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: colors.primary,
                fontSize: 50,
                fontFamily: "'Poppins-ExtraBold', sans-serif",
                '@media (max-width:600px)': {
                  fontSize: 32,
                },
              }}
            >
              Mes comprétences
            </Typography>
          </Box>
          <Box className={classes.skill_paragraph}>
            <Typography
              variant="body2"
              sx={{
                color: colors.primary,
              }}
            >
              Ces compétences ont été acquises au fil de nombreuses expériences : études, projets
              professionnels, job étudiants … Chacune d’elles a contribué à développer ma manière de
              travailler et d’aborder les problèmes aujourd’hui.
            </Typography>
            <Box className={classes.card__container}>
              {data.skills.map((skill) => (
                <Box
                  key={skill.name}
                  sx={{
                    display: 'inline-block',
                    position: 'relative',
                    width: '250px',
                    height: '450px',
                    transition: 'transform .25s ease',
                  }}
                >
                  <Card
                    title={skill.name}
                    skillList={skill.list}
                    pins={skill.pins}
                    cardColor={skill.color}
                    rotatation={skill.rotatation}
                    top={skill.top}
                    getZIndex={() => {
                      setZCounter((prev) => prev + 1);
                      return zCounter + 1;
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: colors.primary,
              }}
            >
              Mes compétences ne se limitent pas à ces domaines. J’ai travaillé sur
              d’autres frameworks JavaScript, notamment Angular, et j’ai également pu développer en
              PHP. J’ai utilisé différents outils pour mener à bien des projets, comme Jira et
              GitLab, et j’ai l’expérience du travail collaboratif avec différents métiers.
              Mais si vous êtes curieux·se d’en savoir plus, n’hésitez pas à me contacter !
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
