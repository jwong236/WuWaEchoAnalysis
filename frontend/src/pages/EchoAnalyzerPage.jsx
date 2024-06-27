import React from "react";
import flautist_image from "./../assets/flautist_icon.png";
import { Box, Button, Typography } from "@mui/material";
import MainStatList from "../components/MainStatList";
import QualityScore from "../components/QualityScore";
import ResonatorMatchingScore from "../components/ResonatorMatchingScore";

function Homepage() {
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
          width: "100%",
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
          width: "100%",
          backgroundColor: "lightblue",
          height: "10px",
          display: "flex",
        }}
      >
        <Typography sx={{ visibility: "hidden" }}>Invisible Text</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 3,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Description/directions here paragraph here Description/directions here
        paragraph here Description/directions here paragraph here
        Description/directions here paragraph here Description/directions here
        paragraph here Description/directions here paragraph here
        Description/directions here paragraph here Description/directions here
        paragraph here Description/directions here paragraph here
        Description/directions here paragraph here Description/directions here
        paragraph here Description/directions here paragraph here
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "1rem 0",
        }}
      >
        <Button variant="contained" color="primary">
          Common (1 cost)
        </Button>
        <Button variant="contained" color="primary">
          Elite (3 cost)
        </Button>
        <Button variant="contained" color="primary">
          Overlord & Calamity (4 cost)
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <MainStatList />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <QualityScore />
          <ResonatorMatchingScore />
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
