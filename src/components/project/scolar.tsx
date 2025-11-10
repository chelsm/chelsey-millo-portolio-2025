import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useThemeColors } from '../../context/useThemeColors';
import ProjectPortfolioSite from '../../assets/images/project_portfolio_site.png';
import ProjectSSite from '../../assets/images/project_s_site.png';
import ProjectIweekSite from '../../assets/images/project_iweek_site.png';
import ProjectPereAdagioSite from '../../assets/images/project_pere_adagio_site.png';
import ProjectSensSite from '../../assets/images/project_sens_site.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  box__container: {
    display: 'flex',
    gap: 25,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    height: 200,
    width: '30%',
    minWidth: 250,
    borderRadius: 20,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  box_1: {
    backgroundImage: `url(${ProjectPortfolioSite})`,
  },
  box_2: {
    backgroundImage: `url(${ProjectSSite})`,
  },
  box_3: {
    backgroundImage: `url(${ProjectIweekSite})`,
  },
    box_4: {
    backgroundImage: `url(${ProjectPereAdagioSite})`,
    },

});

const Scolar = () => {
  const classes = useStyles();

  const { state } = useThemeColors();
  const colors = state.colors;

  const projects: { title : string; image: string , gitlink: string, weblink?: string}[] = [
    { title: 'Portfolio Site', image: ProjectPortfolioSite, gitlink: 'https://github.com/yourusername/portfolio-site', weblink: 'https://yourusername.github.io/portfolio-site/' },
    { title: 'S Site', image: ProjectSSite, gitlink: 'https://github.com/yourusername/s-site', weblink: 'https://yourusername.github.io/s-site/' },
    { title: 'Iweek Site', image: ProjectIweekSite, gitlink: 'https://github.com/yourusername/iweek-site', weblink: 'https://yourusername.github.io/iweek-site/' },
    { title: 'Pere Adagio Site', image: ProjectPereAdagioSite, gitlink: 'https://github.com/yourusername/pere-adagio-site', weblink: 'https://yourusername.github.io/pere-adagio-site/' },
    { title: 'Sens Site', image: ProjectSensSite, gitlink: 'https://github.com/yourusername/sens-site', weblink: 'https://yourusername.github.io/sens-site/' },
  ];

  return (
    <Box className={classes.root}>
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: colors.primary,
          fontFamily: "'Poppins-Regular', sans-serif",
          fontSize: 16,
          lineHeight: 1.6,
          textAlign: 'justify',
        }}
      >
        Durant mon études, j’ai eu l’occasion de travailler sur plusieurs projets concrets qui m’ont
        permis de mettre en pratique mes compétences en développement et en gestion de projet. Ces
        expériences m’ont aussi appris à travailler en équipe, à gérer un projet de a à z.{' '}
      </Typography>

      <Box className={classes.box__container}>

        {projects.map((project, index) => (
          <Box
            key={index}
            className={classes.box}
            sx={{
              backgroundImage: `url(${project.image})`,
              border: '5px solid ' + colors.primary,
            }}
          />
        ))}


      </Box>
    </Box>
  );
};

export default Scolar;
