import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import EchoAnalyzerPage from "./pages/EchoAnalyzerPage";
import Testpage from "./pages/Testpage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<EchoAnalyzerPage />} />
        <Route path="/echoanalyzerpage" element={<EchoAnalyzerPage />} />
        <Route path="/testpage" element={<Testpage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
