import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";

export default function Signup() {
  const [regtoggle, setRegtoggle] = useState(true);
  const [regtoggle1, setRegtoggle1] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {regtoggle && (
        <Paper
          sx={{ width: 400, height: 400 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="First-Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Sure-Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Phone"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Password"
          />
          <div>
            <Button variant="outlined">Sign-up</Button>
            <Button
              onClick={() => {
                setRegtoggle1(!regtoggle1);
              }}
              className="toggle-signup"
            >
              Login instead
            </Button>
          </div>
        </Paper>
      )}

      {regtoggle1 && (
        <Paper
          sx={{ width: 400, height: 400 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Password"
          />
          <div>
            <Button variant="outlined">Login</Button>
          </div>
          <Button
            onClick={() => {
              setRegtoggle(!regtoggle);
            }}
            className="toggle-login"
          >
            Not registred? Sign-up
          </Button>
        </Paper>
      )}
    </div>
  );
}
