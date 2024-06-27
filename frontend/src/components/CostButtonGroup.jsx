import React, { useState } from "react";
import { Box, Button } from "@mui/material";

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
        <Button
          key={index}
          variant="costToggleButton"
          className={selectedButton === index ? "Mui-selected" : ""}
          onClick={() => handleToggle(index)}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default CostButtonGroup;
