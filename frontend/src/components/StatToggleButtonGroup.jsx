import React, { useState } from "react";
import { TextField, Box, Grid, ToggleButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import ShieldIcon from "@mui/icons-material/Shield";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SecurityIcon from "@mui/icons-material/Security";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import BoltIcon from "@mui/icons-material/Bolt";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PanToolIcon from "@mui/icons-material/PanTool";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const sub_stat_ranges = {
  1: [30, 70],
  2: [320, 580],
  3: [30, 70],
  4: [6.4, 11.6],
  5: [6.4, 11.6],
  6: [8.1, 14.7],
  7: [5.6, 14.9],
  8: [6.3, 10.5],
  9: [12.6, 21.0],
  10: [6.4, 11.6],
  11: [6.4, 11.6],
  12: [6.4, 11.6],
  13: [6.4, 11.6],
};

const STAT_OPTIONS = [
  { label: "ATK", icon: SportsMartialArtsIcon, id: "1" },
  { label: "HP", icon: FavoriteIcon, id: "2" },
  { label: "DEF", icon: ShieldIcon, id: "3" },
  { label: "ATK%", icon: MilitaryTechIcon, id: "4" },
  { label: "HP%", icon: HealthAndSafetyIcon, id: "5" },
  { label: "DEF%", icon: SecurityIcon, id: "6" },
  { label: "Energy Regen", icon: BoltIcon, id: "7" },
  { label: "Crit Rate", icon: ShowChartIcon, id: "8" },
  { label: "Crit DMG", icon: BarChartIcon, id: "9" },
  { label: "Basic Attack DMG Bonus", icon: GpsFixedIcon, id: "10" },
  { label: "Heavy Attack DMG Bonus", icon: PanToolIcon, id: "11" },
  { label: "Resonance Skill DMG Bonus", icon: FlashOnIcon, id: "12" },
  { label: "Resonance Liberation DMG Bonus", icon: WhatshotIcon, id: "13" },
];

const StatToggleButtonGroup = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleToggle = (index) => {
    setActiveIndexes((prevActiveIndexes) =>
      prevActiveIndexes.includes(index)
        ? prevActiveIndexes.filter((i) => i !== index)
        : [...prevActiveIndexes, index]
    );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {STAT_OPTIONS.map((stat, index) => {
          const Icon = stat.icon;
          const range = sub_stat_ranges[stat.id];
          const isPercentage = !["1", "2", "3"].includes(stat.id);

          return (
            <Grid container alignItems="center" key={index} spacing={2}>
              <Grid item xs={8}>
                <ToggleButton
                  value={index}
                  selected={activeIndexes.includes(index)}
                  onChange={() => handleToggle(index)}
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icon sx={{ mr: 1 }} />
                  {stat.label}
                </ToggleButton>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  sx={{
                    height: "48px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      padding: 0,
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "#6E6E6E",
                        color: "#9C9C9C",
                      },
                    },
                  }}
                  placeholder={
                    range
                      ? `${range[0]}${isPercentage ? "%" : ""} - ${range[1]}${
                          isPercentage ? "%" : ""
                        }`
                      : ""
                  }
                  disabled={!activeIndexes.includes(index)}
                  fullWidth
                />
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default StatToggleButtonGroup;
