import React from "react";
import { Typography, Button, Box } from "@mui/material";

const QualityScore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Typography variant="h4" align="center">
        Quality Score
      </Typography>
      <Typography variant="h2" align="center" sx={{ margin: "1rem 0" }}>
        75%
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" color="primary">
          Calculate
        </Button>
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default QualityScore;
