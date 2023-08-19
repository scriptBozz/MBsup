import React from "react";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

import { Typography, Paper, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <div>
      <Typography>
        <h1>CONTACT</h1>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{ width: 500, height: 400 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Typography>
            <ol>Phone :</ol>
            <ol>Email :</ol>
            <ol>Address :</ol>
          </Typography>
          <div className="footerIcons">
            <img
              src={facebook}
              alt="media"
              height="30px"
              className="footerImage"
            />
            <img src={instagram} alt="media" height="30px" />
            <img src={twitter} alt="media" height="30px" />
            <img src={youtube} alt="media" height="30px" />
          </div>
        </Paper>
        <Paper
          sx={{ width: 500, height: 400 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="email address"
          />
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />
          <Button variant="contained">Send</Button>
        </Paper>
      </div>
    </div>
  );
}
