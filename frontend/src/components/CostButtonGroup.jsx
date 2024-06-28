import React, { useState } from "react";
import { Box, ToggleButton } from "@mui/material";

const CostButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleToggle = (index) => {
    setSelectedButton(index === selectedButton ? null : index);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 0.5 }}>
      {[
        "Common (1 cost)",
        "Elite (3 cost)",
        "Overlord & Calamity (4 cost)",
      ].map((label, index) => (
        <ToggleButton
          key={index}
          value={index}
          selected={selectedButton === index}
          onClick={() => handleToggle(index)}
        >
          {label}
        </ToggleButton>
      ))}
    </Box>
  );
};

export default CostButtonGroup;
