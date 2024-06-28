import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2B2C31",
      light: "#4A4B54",
      dark: "#23242A",
    },
    secondary: {
      main: "#5F6368",
      light: "#9C9C9C",
      dark: "#6E6E6E",
    },
    success: {
      main: "#00773A",
      light: "#8EAF95",
      dark: "#E0F9E2",
    },
    warning: {
      main: "#57361A",
      light: "#F4DA9D",
      dark: "#FEF0D5",
    },
    info: {
      main: "#646CFF",
      light: "#8086FF",
      dark: "#BFC3FF",
    },
    error: {
      main: "#C9434A",
      light: "#D48588",
      dark: "#E7A4A8",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#C2C2C2",
      disabled: "#9C9C9C",
    },
    background: {
      default: "#23242A",
      paper: "#2B2C31",
    },
    divider: "#4A4B54",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#646CFF",
          color: "#E0E0E0",
          "&:hover": {
            backgroundColor: "#8086FF",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#2B2C31",
          color: "#E0E0E0",
          fontWeight: 600,
          border: "none",
          "&.Mui-selected": {
            backgroundColor: "#6E6E6E",
          },
          "&:hover": {
            backgroundColor: "#9C9C9C",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#9C9C9C",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#4A4B54",
          "& .MuiInputBase-root": {
            fontWeight: 1000,
            backgroundColor: "#E0E0E0",
          },
          "& .MuiInputBase-input": {
            color: "#23242A",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#1C1D21",
          fontWeight: 1000,
        },
        select: {
          backgroundColor: "#E0E0E0",
          color: "#23242A",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
  },
});

export default theme;
