import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

// Import obrazków (możesz zamienić na własne)
import serviceImage1 from "../../assets/o1.jpg";
import serviceImage2 from "../../assets/o2.jpg";
import serviceImage3 from "../../assets/o3.jpg";

const ServiceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      title: "Naprawa komputerów",
      description: "Profesjonalna naprawa laptopów i komputerów stacjonarnych. Diagnoza, wymiana podzespołów, czyszczenie i konserwacja. Naprawa uszkodzeń mechanicznych, wymiana matryc, klawiatur, dysków twardych, pamięci RAM i innych komponentów. Usuwanie wirusów, złośliwego oprogramowania i optymalizacja systemu.",
      image: serviceImage1,
    },
    {
      title: "Instalacja oprogramowania",
      description: "Zainstalujemy oprogramowanie zgodnie z Twoimi potrzebami. Systemy operacyjne, programy biurowe, antywirusy i inne. Konfiguracja systemów operacyjnych Windows, macOS, Linux. Instalacja sterowników, aktualizacja oprogramowania, konfiguracja sieci i urządzeń peryferyjnych.",
      image: serviceImage2,
    },
    {
      title: "Wsparcie techniczne",
      description: "Oferujemy wsparcie techniczne i pomoc w rozwiązywaniu problemów. Zdalna pomoc, konfiguracja sieci, doradztwo techniczne. Rozwiązywanie problemów z oprogramowaniem, sprzętem, siecią i bezpieczeństwem. Szkolenia z obsługi komputera, oprogramowania i bezpieczeństwa w sieci.",
      image: serviceImage3,
    },
  ];

  return (
    <Box
      id="servicesection"
      sx={{
        width: "100%",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* Tytuł sekcji */}
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightBold,
          marginBottom: theme.spacing(5),
          fontFamily: "'Roboto', sans-serif", // Możesz tu wybrać inną czcionkę, np. Google Fonts
          textDecoration: "underline",
          textDecorationColor: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        Tym się zajmujemy
      </Typography>

      {/* Segmenty usług */}
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} index={index} isMobile={isMobile} />
      ))}
    </Box>
  );
};

const ServiceItem = ({ service, index, isMobile }) => {
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
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse", // Naprzemienne ustawienie zdjęć
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginBottom: theme.spacing(6),
        position: "relative",
      }}
    >
      {/* Niebieska tilda nad tekstem */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "4rem",
            color: theme.palette.primary.main,
          }}
        >
          ~
        </Box>
      )}

      {/* Tekst (opis) */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          paddingRight: isMobile ? 0 : theme.spacing(4),
          textAlign: isMobile ? "center" : index % 2 === 0 ? "left" : "right", // Dopasowanie tekstu
          marginBottom: isMobile ? theme.spacing(2) : 0,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(2),
          }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          {service.description}
        </Typography>
      </Box>

      {/* Zdjęcie */}
      <Box
        component={motion.div}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 }
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{ width: isMobile ? "100%" : "50%" }}
      >
        <img
          src={service.image}
          alt={service.title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ServiceSection;