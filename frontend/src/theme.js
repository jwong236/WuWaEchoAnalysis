import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "costToggleButton" },
          style: {
            backgroundColor: "red", // Default color
            color: "#000",
            "&.Mui-selected": {
              backgroundColor: "green", // Toggled color
              color: "#fff",
            },
            "&:hover": {
              backgroundColor: "blue", // Hover color
            },
            "&.Mui-selected:hover": {
              backgroundColor: "lightblue", // Toggled hover color
            },
          },
        },
        {
          props: { variant: "statToggleButton" },
          style: {
            backgroundColor: "#e0e0e0", // Default color
            color: "#000",
            "&.Mui-selected": {
              backgroundColor: "green", // Toggled color
              color: "#fff",
            },
            "&:hover": {
              backgroundColor: "blue", // Hover color
            },
            "&.Mui-selected:hover": {
              backgroundColor: "red", // Toggled hover color
            },
          },
        },
      ],
    },
  },
});

export default theme;
