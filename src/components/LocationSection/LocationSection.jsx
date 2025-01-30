import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";  // Importowanie motion z framer-motion

const LocationSection = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      sx={{
        width: "100%",
        padding: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.default, // Użycie koloru tła z motywu
        color: theme.palette.text.primary, // Użycie koloru tekstu z motywu
      }}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: theme.spacing(2),
        }}
        animate={{ scale: [1, 1.5, 1] }}
transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <LocationOn sx={{ fontSize: "3rem", color: theme.palette.primary.main }} /> {/* Użycie koloru głównego z motywu */}
      </motion.div>
      <Typography
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        variant="h4"
        sx={{ marginBottom: theme.spacing(2), fontWeight: "bold" }}
      >
        Nasza Lokalizacja
      </Typography>
      <Typography
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        variant="body1"
        sx={{ textAlign: "center", maxWidth: "600px", marginBottom: theme.spacing(4) }}
      >
        Znajdujemy się w centrum miasta, łatwo dostępni dla wszystkich naszych klientów. Zapraszamy do odwiedzenia nas w naszej siedzibie w Gdyni, Rumi i Redzie.
      </Typography>
      {/* Lokalizacja */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          Gdynia, Rumia, Reda
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationSection;