import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import portfolioLogo from '../../assets/images/logo.svg';
import { useThemeColors } from '../../context/useThemeColors';

const useNavbarStyles = (primary: string) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    height: 100,
    px: { xs: 1, sm: 3, md: 6 },
    paddingTop: 2,
    color: primary,
    width: '85vw',
    flexWrap: 'wrap',
  },
  button: {
    textTransform: 'uppercase',
    fontSize: { xs: '14px', sm: '16px' },
    color: primary,
    backgroundColor: 'transparent',
    fontFamily: "'Poppins-ExtraBold', sans-serif",
    letterSpacing: 1,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  drawerPaper: {
    boxSizing: 'border-box',
    width: 240,
    bgcolor: 'transparent',
  },
  drawerHeader: {
    textAlign: 'center',
    p: 2,
    bgcolor: 'transparent',
  },
});

const Navbar = () => {
  const { state } = useThemeColors();
  const colors = state.colors;

  const navItems = ['présentation', 'projets', 'compétences', 'contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDrawerToggle = () => setIsMenuOpen((prev) => !prev);

  const styles = useNavbarStyles(colors.primary);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const LogoButton = ({ width }: { width: number }) => (
    <Button
      onClick={handleClick}
      sx={{
        p: 0,
        minWidth: 0,
        cursor: 'pointer',
      }}
    >
      <Box
        component="img"
        src={portfolioLogo}
        alt="Logo"
        sx={{
          width,
          height: 'auto',
        }}
      />
    </Button>
  );

  const drawer = (
    <Box sx={styles.drawerHeader} onClick={handleDrawerToggle}>
      <LogoButton width={60} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'left' }}
              onClick={() => {
                const section = document.getElementById(item);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ListItemText
                primary={item}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: '1.2rem',
                      fontFamily: "'Poppins-ExtraBold', sans-serif",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box>
      <AppBar component="nav" position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Toolbar sx={{ ...styles.toolbar, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: '0 0 auto' }}>
            <LogoButton width={60} />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={styles.button}
                onClick={() => {
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ flex: '0 0 60px', display: { xs: 'none', sm: 'block' } }} />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={isMenuOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': styles.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
