import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ResonatorMatchingScore = () => {
  const rows = [
    {
      formula: "Calculation Formula 1",
      value: "834.3",
      unit: "DPS",
      score: "Match Score 1",
      percentage: "90%",
    },
    {
      formula: "Calculation Formula 2",
      value: "834.3",
      unit: "DPS",
      score: "Match Score 2",
      percentage: "90%",
    },
    {
      formula: "Calculation Formula 3",
      value: "834.3",
      unit: "DPS",
      score: "Match Score 3",
      percentage: "90%",
    },
    {
      formula: "Calculation Formula 4",
      value: "834.3",
      unit: "DPS",
      score: "Match Score 4",
      percentage: "90%",
    },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Resonator Matching Score
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Formula</TableCell>
              <TableCell align="center">DPS</TableCell>
              <TableCell align="center">Matching Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  <Box
                    sx={{ bgcolor: "green", width: "50px", height: "50px" }}
                  ></Box>
                </TableCell>
                <TableCell align="center">{row.formula}</TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{row.unit}</Typography>
                  <Typography variant="h6">{row.value}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{row.score}</Typography>
                  <Typography variant="h6">{row.percentage}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResonatorMatchingScore;
