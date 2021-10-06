import "./access.css";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Access = (props) => {
  const [mail, setmail] = useState("");
  const [psw, setpsw] = useState("");

  function signup() {
    console.log("Email:", mail);
    console.log("password:", psw);
  }

  function sugithub() {
    console.log("sign up with github");
  }
  function changemail(event) {
    setmail(event.target.value);
  }
  function changepsw(event) {
    setpsw(event.target.value);
  }
  function Login() {
    console.log("Login");
  }

  return (
    <div className="body">
      <div className="left">
        <img src={props.src} alt={props.alt} className="logo" /> <br />
        <img src={props.bg} alt={props.alt2} className="bg" />
      </div>
      <div className="right">
        <img src={props.name} alt={props.alt3} className="name" />
        <h2>Sign Up</h2>
        <div className="form">
          <Button type="default" onClick={sugithub}>
            <FontAwesomeIcon icon={faGithub} className="github" /> Sign up with
            GitHub
          </Button>
          <p className="use">
            ---------------------or use email---------------------
          </p>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 }
            }}
            noValidate
            autoComplete="off"
          >
            <div className="email">
              <TextField
                id="outlined-input"
                label="Enter Email address"
                placeholder="example123@gmail.com"
                onChange={changemail}
                value={mail}
              />
            </div>
            <div className="psw">
              <TextField
                id="outlined-input"
                label="Password"
                type="password"
                placeholder="********"
                onChange={changepsw}
                value={psw}
              />
            </div>
          </Box>
          <Button type="primary" className="signup" onClick={signup}>
            Sign Up
          </Button>
          <br />
          <span className="account">Have an account?</span>
          <Button type="link" onClick={Login}>
            Login
          </Button>
        </div>
        <h1 className="quote">making tech education accessible</h1>
      </div>
    </div>
  );
};
