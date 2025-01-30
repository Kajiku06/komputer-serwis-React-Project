import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { Link } from "react-scroll"; // Importujemy bibliotekę react-scroll
import animationGif from "../../assets/479-laptop-notebook.gif";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // Import ikony strzałki w dół
import { motion } from "framer-motion"; // Importowanie motion z framer-motion

const WelcomeSection = () => {
  const theme = useTheme();

  const texts = [
    "Witamy na naszej stronie!",
    "Tworzymy nowoczesne rozwiązania.",
    "Twoje potrzeby, nasza pasja.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: theme.palette.background.default,
        position: "relative",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          component="img"
          src={animationGif}
          alt="Animacja"
          sx={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing(4),
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          variant="h3"
          sx={{
            color: theme.palette.text.primary,
            textAlign: "center",
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: theme.spacing(2),
          }}
        >
          {texts[currentTextIndex]}
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          sx={{ display: "flex", gap: 1 }}
        >
          {texts.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  currentTextIndex === index
                    ? theme.palette.primary.main
                    : theme.palette.grey[400],
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>

        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          variant="h5"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: "center",
            marginTop: theme.spacing(3),
            fontWeight: theme.typography.fontWeightMedium,
            fontStyle: "italic",
          }}
        >
          "Profesjonalna naprawa i wsparcie techniczne dla Twojego komputera!"
        </Typography>

        {/* Strzałka w dół */}
        <Link to="servicesection" smooth={true} duration={500}>
          <IconButton
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            sx={{
              marginTop: theme.spacing(4),
              fontSize: "2rem",
              color: theme.palette.primary.main,
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default WelcomeSection;