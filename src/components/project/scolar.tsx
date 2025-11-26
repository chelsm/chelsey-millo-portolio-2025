import { Box, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRef, useState } from 'react';
import { useThemeColors } from '../../context/useThemeColors';

import ProjectPortfolioSite from '../../assets/images/project_portfolio_site.png';
import ProjectSSite from '../../assets/images/project_s_site.png';
import ProjectIweekSite from '../../assets/images/project_iweek_site.png';
import ProjectPereAdagioSite from '../../assets/images/project_pere_adagio_site.png';
import ProjectSensSite from '../../assets/images/project_sens_site.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import type { SchoolProject } from '../../types';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  cardWrapper: {
    padding: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '0.4s ease',
  },
  title: {
    position: 'absolute',
    top: 20,
    left: 20,
    opacity: 0,
    transition: '0.4s ease',
    fontWeight: 600,
    fontFamily: "'Poppins-ExtraBold', sans-serif",
    color: 'white',
    textShadow: '0px 2px 5px rgba(0,0,0,0.4)',
  },
  description: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    opacity: 0,
    transition: '0.4s ease',
    fontWeight: 400,
    fontFamily: "'Poppins-Regular', sans-serif",
    color: 'white',
    textAlign: 'left',
    lineHeight: 1.5,
    textShadow: '0px 1px 3px rgba(0,0,0,0.5)',
  },

  card: {
    position: 'relative',
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: '0.3s ease',

    '&:hover $image': {
      transform: 'scale(1.12)',
      filter: 'brightness(0.5)',
    },

    '&:hover $title': {
      opacity: 1,
    },
    '&:hover $description': {
      opacity: 1,
    },
  },
 
});

const Scolar = () => {
  const classes = useStyles();
  const { state } = useThemeColors();
  const colors = state.colors;
  const isSmallScreen = useMediaQuery('(max-width:1400px)');

  const projects: SchoolProject[] = [
    {
      title: 'Portfolio 2022',
      image: ProjectPortfolioSite,
      gitLink: 'https://github.com/chelsm/chelsey-millo-portfolio-2022',
      description:
        'Ceci est mon ancien portfolio, créé pour présenter mes expériences. Il reflète mes compétences avant ma rentrée en Master.',
    },
    {
      title: "Portfolio d'un proche",
      image: ProjectSSite,
      gitLink: 'https://samuel-song.vercel.app/',
      description:
        'J’ai conçu un petit portfolio pour un proche qui en avait besoin, afin de lui fournir un aperçu clair de ses projets et expériences. Un petit support supplémentaire pour présenter son travail.',
    },
    {
      title: 'Iweek',
      image: ProjectIweekSite,
      description:
        'J’ai conçu le site de l’association iWeek, qui permet aux étudiants d’accueillir des participants internationaux pendant une semaine. L’objectif est de favoriser les échanges culturels, partager des expériences et créer des rencontres enrichissantes entre étudiants de différents horizons.',
    },
    {
      title: 'Pere Adagio',
      image: ProjectPereAdagioSite,
      gitLink: 'https://github.com/chelsm/school_project_2021_pere_adagio',
      description:
        'Dans le cadre d’un projet d’école, mon équipe et moi avons conçu le site Père Adagio, un dispositif permettant de rapprocher et soutenir les artisans des métiers de bouche : rencontres en ligne, événements réels et accompagnement pour créer et promouvoir leurs établissements.',
    },
    {
      title: 'Sens',
      image: ProjectSensSite,
      gitLink: 'https://github.com/chelsm/school_project_2021_sens',
      description:
        'Dans ce projet scolaire, nous avons créé un site pour promouvoir l’entrepreneuriat local et humaniste, afin de valoriser ses impacts positifs et diffuser une image inspirante des entrepreneurs auprès du grand public.',
    },
  ];

  const startX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - startX.current) > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = (project: SchoolProject) => {
    if (!isDragging && project.gitLink) {
      window.open(project.gitLink, '_blank');
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    slidesToShow: isSmallScreen ? 1 : 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: true
  };

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

      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box
            key={index}
            className={classes.cardWrapper}
            sx={{ justifyContent: isSmallScreen ? 'flex-start' : 'center' }}
          >
            <Box
              className={classes.card}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={() => handleMouseUp(project)}
            >
              <Box
                className={classes.image}
                sx={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: isSmallScreen ? 'left center' : 'center center',
                }}
              />

              <Typography
                className={classes.title}
                sx={{
                  fontFamily: "'Poppins-ExtraBold', sans-serif",
                  color: colors.white,
                  fontSize: 22,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                className={classes.description}
                sx={{
                  color: colors.white,
                  fontFamily: "'Poppins-Regular', sans-serif",
                  fontSize: 16,
                }}
              >
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Scolar;
