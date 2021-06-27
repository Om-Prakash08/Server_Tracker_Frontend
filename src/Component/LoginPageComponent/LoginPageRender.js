import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField, InputAdornment } from "@material-ui/core";
import "./LoginPage.css";

import LoadingSpinner from "../loadingSpinner";
import VisibilityIcon from "@material-ui/icons/Visibility";

const LoginPageRender = (props) => {
  const [isPasswordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    isPasswordShown ? setPasswordShown(false) : setPasswordShown(true);
  };
  const { checkToken, handleSubmit, username, updateLoginData, password, err } = props;
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
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 21 } }}
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
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 21 } }}
              required
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon onClick={togglePasswordVisiblity} />
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
export default LoginPageRender;
