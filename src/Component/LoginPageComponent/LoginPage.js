import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [loginData, setLoginData] = useState({
    username :"" ,
    password :"" ,
  });
  

  const updateLoginData = (event) =>
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });

  const { username, password } = loginData;

  function handleSubmit(event) {
    console.log(loginData);
    props.onAuth(true) ;
    event.preventDefault();
  }

  return (
    <div className="loginBox">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-secondary"
          label="User name"
          fullWidth
          style={{ margin: 18}}
          type="email"
          name="username"
          value={username}
          onChange={updateLoginData}
        />
        <TextField
          id="standard-secondary"
          label="Password"
          fullWidth
          style={{ margin:18 }}
          name="password"
          value={password}
          onChange={updateLoginData}
        />
        <div class="login-div-btn">
        <Button variant="contained" size="large" color="primary" type="submit" className="login-btn" style={{margin:20}} >
          Login
        </Button>
        </div>
      </form>
      {/* <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p> */}
    </div>
  );
};

export default LoginPage;
