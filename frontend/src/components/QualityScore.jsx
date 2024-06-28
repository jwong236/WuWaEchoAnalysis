import React from "react";
import { Typography, Box, Button } from "@mui/material";

const QualityScore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "background.paper",
        position: "relative",
      }}
    >
      <Typography variant="h4" align="center">
        Quality Score
      </Typography>
      <Typography variant="h1" align="center">
        75%
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" color="primary">
          Calculate
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default QualityScore;
