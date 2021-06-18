import React, { useState } from "react";
import "./ScriptComponent.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ScriptErrorComponent from "./ScriptErrorComponent";

const ScriptComponent = (props) => {
  const {serviceAlertData, AlertType } = props;
  const [ScriptData, setScriptData] = useState({
    Script1: "",
    Script2: "",
    Script3: "",
    Script4: "",
  });
  const { Script1, Script2, Script3, Script4 } = ScriptData;
  const [sending, SetSending] = useState(false);
  const [Apierror, setApiError] = useState(false);
  const [emptyAlertError, setEmptyAlertError] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateScriptData = (event) =>
    setScriptData({
      ...ScriptData,
      [event.target.name]: event.target.value,
    });

  const sendScript = async () => {
    SetSending(true);
    setApiError(false);
    try {
      const resp = await axios({
        method: "POST",
        url:`http://localhost:5000/script`,
        //url: "https://jsonplaceholder.typicode.com/posts", //fake api
        data: {
          serverId:serviceAlertData.serverId,
          alertId:serviceAlertData.alertId,
          scriptFile :ScriptData.Script1+ScriptData.Script2+ScriptData.Script3+ScriptData.Script4,
        },
      });
      console.log(resp.data);
      setSuccess(true);
    } catch (err) {
      if (err) setApiError(true);
      console.error(err);
    }
    SetSending(false);
  };

  function handleSubmit(event) {
    if (AlertType) {
      sendScript();
      setEmptyAlertError(false);
    } else {
      setEmptyAlertError(true);
    }
   // console.log(ScriptData);
    event.preventDefault();
  }

  return (
    <div className="col-lg-6 third">
      <h1 id="Alert-heading" className="Alert-heading">
        {AlertType}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Script 1</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={Script1}
            name="Script1"
            onChange={(e) => updateScriptData(e)}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label>Script 2</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={Script2}
            name="Script2"
            onChange={(e) => updateScriptData(e)}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>Script 3</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={Script3}
            name="Script3"
            onChange={(e) => updateScriptData(e)}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>Script 4</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={Script4}
            name="Script4"
            onChange={(e) => updateScriptData(e)}
            autoComplete="off"
          />
        </div>

        <Button
          variant="contained"
          size="small"
          color="primary"
          type="submit"
          className="login-btn"
          disabled={sending}
        >
        Save
        </Button>
      </form>
      <ScriptErrorComponent
        Apierror={Apierror}
        emptyAlertError={emptyAlertError}
        success={success}
        AlertType={AlertType}
      />
    </div>
  );
};
export default ScriptComponent;
