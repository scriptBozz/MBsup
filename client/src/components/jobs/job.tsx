import React from "react";
import { Paper, Typography } from "@mui/material/";
export default function Job() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ width: 300, height: 100,}}
      >
        <Typography>
          <p>No Jobs to display at the moment</p>
        </Typography>
      </Paper>
    </div>
  );
}
