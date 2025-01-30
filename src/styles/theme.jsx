const { createTheme } = require("@mui/material/styles");

// Definicja zmiennych dla czcionek, rozmiarów i kolorów
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // NIEBIESKI
      light: "#63a4ff", // JASNONIEBIESKI
      dark: "#004ba0", // CIEMNONIEBIESKI
    },
    secondary: {
      main: "#f50057", // RÓŻOWY
      light: "#ff4081", // JASNORÓŻOWY
      dark: "#c51162", // CIEMNORÓŻOWY
    },
    error: {
      main: "#d32f2f", // CZERWONY
    },
    background: {
      default: "#f5f5f5", // JASNY SZARY
      paper: "#ffffff", // BIAŁY
      primary: "#555555", // SZARY
    },
    text: {
      primary: "#333333", // CIEMNY SZARY
      secondary: "#757575", // ŚREDNI SZARY
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem", 
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem", // Rozmiar tekstu podstawowego
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
  },
  spacing: 8, // Baza dla marginesów i paddingów (8px jako domyślny odstęp)
  shape: {
    borderRadius: 8, // Promień zaokrągleń (np. dla przycisków, kart itp.)
  },
});

module.exports = theme;