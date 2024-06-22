import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Homepage from "./pages/Homepage";
import Testpage from "./pages/Testpage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/testpage" element={<Testpage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
