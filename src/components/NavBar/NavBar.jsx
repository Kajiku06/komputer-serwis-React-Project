import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import bitmapa from '../../assets/bitmapa.svg';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Strona Główna", path: "/" },
    { label: "O nas", path: "/about" },
    { label: "Usługi", path: "/services" },
    { label: "Kontakt", path: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          transition: "transform 0.3s ease-in-out",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          marginBottom: isMobile ? theme.spacing(10) : 0, // Add significantly more margin to the bottom on mobile
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              component="img"
              src={bitmapa}
              alt="Logo"
              sx={{
                height: '80px',
                marginRight: theme.spacing(2),
              }}
            />
            <Typography
              variant="h4"
              component="div"
              fontFamily={"monospace"}
              fontStyle={"oblique"}
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
              }}
            >
              Mobilny Serwis Komputerowy Rumia
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              edge="start"
              sx={{
                color: theme.palette.text.primary,
              }}
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div
              style={{
                display: "flex",
                gap: theme.spacing(2),
                marginRight: theme.spacing(2),
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{
                    margin: 0,
                    padding: 0,
                    textTransform: "none",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationColor: theme.palette.primary.main, // Ustawienie koloru podkreślenia na niebieski
                    "&:hover": {
                      textDecoration: `underline ${theme.palette.secondary.main}`, // Zmiana koloru podkreślenia na różowy
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => navigate('/contact')}
                sx={{
                  marginLeft: "auto",
                  marginRight: theme.spacing(2),
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.secondary.main,
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1.4rem",
                  padding: theme.spacing(1, 2),
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
              >
                +48 123 456 789
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {menuOpen && isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: theme.palette.common.white,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{
              position: "absolute",
              top: theme.spacing(2),
              right: theme.spacing(2),
              color: theme.palette.common.white,
            }}
          >
            <CloseIcon />
          </IconButton>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => {
                toggleMenu();
                navigate(item.path);
              }}
              sx={{
                color: theme.palette.common.white,
                fontSize: "1.5rem",
                textTransform: "uppercase",
                mb: theme.spacing(2),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}
      {isMobile && <Box sx={{ height: theme.spacing(10) }} />} {/* Add separation on mobile */}
    </>
  );
};

export default Navbar;
