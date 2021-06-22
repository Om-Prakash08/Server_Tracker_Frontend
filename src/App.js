import { useState } from "react";
import {
  BrowserRouter as Router,
  //Route,
  //Redirect,
  //Switch,
} from "react-router-dom";
import "./App.css";
import ServerPage from "./server-page/server-page";
import LoginPage from "../src/Component/LoginPageComponent/LoginPage";


function App() {
  const [Token, setToken] = useState("");

  let routes;
  if (Token) {
    routes = <ServerPage token={Token} />;
  } else {
    routes = <LoginPage onAuth={setToken} />;
  }

  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}

export default App;
