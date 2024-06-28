import React, { useState } from "react";
import flautist_image from "./../assets/flautist_icon.png";
import { Box, Typography } from "@mui/material";
import StatToggleButtonGroup from "../components/StatToggleButtonGroup";
import QualityScore from "../components/QualityScore";
import ResonatorMatchingScore from "../components/ResonatorMatchingScore";
import CostButtonGroup from "../components/CostButtonGroup";
import MainStatSelect from "../components/MainStatSelect";

function EchoAnalyzerPage() {
  const [mainStat, setMainStat] = useState("");
  const handleMainStatChange = (event) => {
    setMainStat(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "20%",
        }}
      >
        <Box
          component="img"
          src={flautist_image}
          alt="Flautist"
          sx={{
            height: "100%",
            width: "auto",
          }}
        />
        <Typography variant="h4" sx={{ margin: "1rem" }}>
          Echo Analyzer
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Wuthering Waves paragraph here paragraph here paragraph here paragraph
        here paragraph here paragraph here paragraph here paragraph here
        paragraph here paragraph here paragraph here paragraph here paragraph
        here paragraph here paragraph here paragraph here paragraph here
        paragraph here paragraph here
      </Box>
      <Box
        sx={{
          backgroundColor: "info.main",
          height: "10px",
          display: "flex",
        }}
      >
        <Typography sx={{ visibility: "hidden" }}>Invisible Text</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        This tool is designed to help you analyze your Echoes. Select cost of
        your echo, it's main stat, and select the substats it has and fill in
        the values. Note that the echo does not need all 5 substats for a
        quality score to be calculated.
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "1rem 0",
        }}
      >
        <CostButtonGroup />
      </Box>
      <MainStatSelect
        mainStat={mainStat}
        handleMainStatChange={handleMainStatChange}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "1rem",
        }}
      >
        <StatToggleButtonGroup />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flex: 1,
          }}
        >
          <QualityScore />
          <ResonatorMatchingScore />
        </Box>
      </Box>
    </Box>
  );
}

export default EchoAnalyzerPage;
