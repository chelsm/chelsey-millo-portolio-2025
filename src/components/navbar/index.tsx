import { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import redLogo from "../../assets/logo_red.jpg";
import pinkLogo from "../../assets/logo_pink.jpg";
import { useThemeColors } from "../../context/useThemeColors";

const useNavbarStyles = (colors: {
  primary: string;
  text: string;
  navBackground: string;
}) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    px: { xs: 1, sm: 3, md: 6 },
    bgcolor: colors.navBackground,
    color: colors.primary,
  },
  button: {
    textTransform: "lowercase",
    fontSize: { xs: "14px", sm: "16px" },
    color: colors.primary,
    backgroundColor: "transparent",
    fontFamily: "'Poppins-Medium', sans-serif",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  drawerPaper: {
    boxSizing: "border-box",
    width: 240,
    bgcolor: colors.navBackground,
  },
  drawerHeader: {
    textAlign: "center",
    p: 2,
    bgcolor: colors.navBackground,
  },
});

const Navbar = () => {
  const { state } = useThemeColors();
  const colors = state.colors;

  const navItems = ["Présentation", "Projets", "Expériences", "Me contacter"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDrawerToggle = () => setIsMenuOpen((prev) => !prev);

  const styles = useNavbarStyles(colors);

  const Logo = ({ width }: { width: number }) => (
    <Box
      component="img"
      src={state.darkMode ? pinkLogo : redLogo}
      alt="Logo"
      sx={{ width, height: "auto" }}
    />
  );

  const drawer = (
    <Box sx={styles.drawerHeader} onClick={handleDrawerToggle}>
      <Logo width={60} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText
                primary={item}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: "1.2rem",
                      fontFamily: "'Poppins-Medium', sans-serif",
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

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        sx={{ bgcolor: colors.primary }}
      >
        <Toolbar sx={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Logo width={60} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: 1, sm: 2 },
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={styles.button}>
                {item}
              </Button>
            ))}
          </Box>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": styles.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
