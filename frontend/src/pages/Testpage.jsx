// src/pages/Testpage.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function Testpage() {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    console.log("Current path:", location.pathname);

    const apiUrl = import.meta.env.VITE_API_URL + "/data";
    console.log("API URL:", apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [location]);

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
