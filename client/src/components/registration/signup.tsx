import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import axios from "axios";

export default function Signup() {
  const endpoint = "http://localhost:3001/users";

  const [userinfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const [signupRespons, setSignupResponse] = useState("");
  const [regtoggle, setRegtoggle] = useState(true);
  const [regtoggle1, setRegtoggle1] = useState(false);

  function getName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, name: event.target.value });
  }
  function getEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, email: event.target.value });
  }
  function getPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, password: event.target.value });
  }
  function getUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, username: event.target.value });
  }
  function onclickHandler() {
    axios
      .post(`${endpoint}/signup`, userinfo)
      .then((res) => setSignupResponse("Sign up success"))
      .catch((err) => console.log(err));
  }

  function onclickSinginHandler() {
    axios
      .post(`${endpoint}/signin`, userinfo)
      .then((res) => setSignupResponse("Sign in success"))
      .catch((err) => console.log(err));
  }

  console.log(signupRespons);

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
          onSubmit={(e) => e.preventDefault()}
          className="form_paper"
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
              label="Name"
              defaultValue=""
              onChange={getName}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              onChange={getEmail}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              onChange={getPassword}
            />
            <TextField
              required
              id="outlined-required"
              label="Username"
              defaultValue=""
              onChange={getUserName}
            />

            <div>
              <Button variant="outlined" type="submit" onClick={onclickHandler}>
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
            <Button variant="outlined" onClick={onclickSinginHandler}>
              Login
            </Button>
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
