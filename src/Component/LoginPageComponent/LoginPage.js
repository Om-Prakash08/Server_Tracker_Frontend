import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { TextField, InputAdornment } from "@material-ui/core";
import "./LoginPage.css";
import axios from "axios";
import LoadingSpinner from "../loadingSpinner";
import VisibilityIcon from "@material-ui/icons/Visibility";

const LoginPage = (props) => {
  const [checkToken, setCheckToken] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(false);
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
        const tokenExpirationDate = new Date().getTime() + 1000 * 60 * 60;
        props.setTime(tokenExpirationDate);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: resp.data,
            expiration: tokenExpirationDate,
          })
        );
      } catch (err) {
        if(err.response.status===404)
         setErr("Bad network!");
        else
         setErr("Invalid Username or password.");
      }
    };
    sendAuthData();
  }

  const togglePasswordVisiblity = () => {
    isPasswordShown ? setPasswordShown(false) : setPasswordShown(true);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      props.onAuth(storedData.token);
      props.setTime(storedData.expiration);
    } // eslint-disable-next-line
    setCheckToken(true);
  }, [props]);

  return (
    <div>
      {checkToken === true ? (
        <div className="loginBox">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-primary"
              // fontSize="300"
              label="User name"
              fullWidth
              style={{ margin: 18 }}
              type="username"
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
              type={isPasswordShown ? "text" : "password"}
              name="password"
              value={password}
              onChange={updateLoginData}
              required
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon
                     
                      onClick={togglePasswordVisiblity}
                    />
                  </InputAdornment>
                ),
              }}
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
      ) : (
        <LoadingSpinner loading={true} />
      )}
    </div>
  );
};

export default LoginPage;
