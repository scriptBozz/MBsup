import React from "react";

import { Typography, Paper, Button,  } from "@mui/material";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Paper sx={{ width: 600, height: 400 }}>
        <Typography>
          <h1>MISSION</h1>
        </Typography>
      </Paper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          gap: "10px",
        }}
      >
        <Typography>
          <h1>SERVICES</h1>
        </Typography>
        <Typography>
          <p>Real Estate Brokrage Services</p>
                  <p>Human Resource Management</p>
                  <p>Recruitment servcices</p>
        </Typography>
        <Link to="/contact">
          <Button>Contact-Us</Button>
        </Link>
      </div>
    </div>
  );
}
