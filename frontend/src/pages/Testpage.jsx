// src/pages/Testpage.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function Testpage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL + "/data";
    console.log("API URL:", apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {data ? (
        <Typography>{data.message}</Typography>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
}

export default Testpage;
