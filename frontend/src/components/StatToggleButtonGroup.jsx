import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const StatToggleButtonGroup = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mainStat, setMainStat] = useState("");

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleMainStatChange = (event) => {
    setMainStat(event.target.value);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" component="div">
          Main Stat
        </Typography>
        <FormControl variant="outlined">
          <InputLabel>Main Stat</InputLabel>
          <Select
            value={mainStat}
            onChange={handleMainStatChange}
            label="Main Stat"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Stat 1</MenuItem>
            <MenuItem value={20}>Stat 2</MenuItem>
            <MenuItem value={30}>Stat 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {Array.from({ length: 13 }, (_, index) => (
        <Box key={index} mb={2}>
          <Button
            variant="statToggleButton"
            className={activeIndex === index ? "Mui-selected" : ""}
            onClick={() => handleToggle(index)}
          >
            Toggle Button {index + 1}
          </Button>
          {activeIndex === index && (
            <TextField variant="outlined" placeholder="Text Field" />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StatToggleButtonGroup;
