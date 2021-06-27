import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import LoginPageRender from "./LoginPageRender";

const LoginPage = (props) => {
  const [checkToken, setCheckToken] = useState(false);
  const [err, setErr] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
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
        const data = {
          token: resp.data,
          expiration: tokenExpirationDate,
        };
        var ciphertext = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          "secret key 123"
        ).toString();
        localStorage.setItem(
          "userData",
          ciphertext
          // JSON.stringify({
          //   token: resp.data,
          //   expiration: tokenExpirationDate,
          // } )
        );
      } catch (err) {
        if (err.response.status === 404) setErr("Bad network!");
        else setErr("Invalid Username or password.");
      }
    };
    sendAuthData();
  }

  useEffect(() => {
    const data=localStorage.getItem("userData") ;
    if(data){
    const bytes = CryptoJS.AES.decrypt(
      data,
      "secret key 123"
    );
    const storedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      props.onAuth(storedData.token);
      props.setTime(storedData.expiration);
    }} // eslint-disable-next-line
    setCheckToken(true);
  }, [props]);

  const updateLoginData = (event) =>
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });

  return (
    <LoginPageRender
      checkToken={checkToken}
      handleSubmit={handleSubmit}
      username={username}
      updateLoginData={updateLoginData}
      password={password}
      err={err}
    />
  );
};

export default LoginPage;
