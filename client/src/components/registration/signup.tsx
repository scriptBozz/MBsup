import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import axios from "axios";

export default function Signup() {
  const [regtoggle, setRegtoggle] = useState(true);
  const [regtoggle1, setRegtoggle1] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(`http://localhost:3001/users/signup`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(process.env.REACT_APP_BASE_URL);

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
        <form
          className="form_paper"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
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
              defaultValue="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="User-Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Password"
          /> */}
            <div>
              <Button variant="outlined" type="submit">
                Sign-up
              </Button>
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
        </form>
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
