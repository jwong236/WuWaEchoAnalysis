import React from "react";
import { Typography, Select, MenuItem, FormControl, Box } from "@mui/material";

const STAT_OPTIONS = [
  "ATK",
  "HP",
  "DEF",
  "ATK%",
  "HP%",
  "DEF%",
  "Energy Regen",
  "Crit Rate",
  "Crit DMG",
  "Basic Attack DMG Bonus",
  "Heavy Attack DMG Bonus",
  "Resonance Skill DMG Bonus",
  "Resonance Liberation DMG Bonus",
];

const MainStatSelect = ({ cost, mainStat, handleMainStatChange }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%", mb: 2 }}>
      <Typography variant="h6" sx={{ mr: 2, whiteSpace: "nowrap" }}>
        Main Stat
      </Typography>
      <FormControl sx={{ height: "48px", width: "25%" }}>
        <Select
          value={mainStat}
          onChange={handleMainStatChange}
          label="Main Stat"
          sx={{
            height: "48px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {STAT_OPTIONS.map((stat, index) => (
            <MenuItem key={index} value={stat}>
              {stat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MainStatSelect;
