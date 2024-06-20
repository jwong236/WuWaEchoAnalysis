import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
