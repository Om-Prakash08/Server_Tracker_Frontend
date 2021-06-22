import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./LoginPage.css";
import axios from "axios";

const LoginPage = (props) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const updateLoginData = (event) =>
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });

  const { username, password } = loginData;

  function handleSubmit(event) {
    event.preventDefault();
    const sendAuthData = async () => {
      try {
        const resp = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_BACKEND_API_URL}/auth/login`,
          data: {
            email: username,
            password,
          },
          headers: {
            "x-auth-token": props.token,
          },
        });
        props.onAuth(resp.data);
      } catch (err) {
        console.error(err);
        setErr("Invalid Username or password.");
      }
    };
    sendAuthData();
  }

  return (
    <div className="loginBox">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-primary"
          label="User name"
          fullWidth
          style={{ margin: 18 }}
          type="email"
          name="username"
          value={username}
          onChange={updateLoginData}
          required
        />
        <TextField
          id="standard-secondary"
          label="Password"
          fullWidth
          style={{ margin: 18 }}
          type="password"
          name="password"
          value={password}
          onChange={updateLoginData}
          required
        />
        <div className="login-div-btn">
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            className="login-btn"
            style={{ margin: 20 }}
          >
            Login
          </Button>
        </div>
      </form>

      <div className="login-error">
        <p>{err}</p>
      </div>
    </div>
  );
};

export default LoginPage;
