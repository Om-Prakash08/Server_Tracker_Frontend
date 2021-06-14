import React, { useState } from "react";
import "./ScriptComponent.css";
import AddOutlinedIcon from '@material-ui/icons/AddCircleOutline';

const ScriptComponent = (props) => {
  const [ScriptData, setScriptData] = useState({
    Script1: "",
    Script2: "",
    Script3: "",
    Script4: "",
  });

  const updateScriptData = (event) =>
    setScriptData({
      ...ScriptData,
      [event.target.name]: event.target.value,
    });

  const { Script1, Script2, Script3, Script4 } = ScriptData;

  function handleSubmit(event) {
    console.log(ScriptData);
    event.preventDefault();
  }

  const { AlertType } = props;

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
          />
        </div>
        <button className=" btn  btn-primary script-btn" type="submit">
        Add  <span className="plus-icon"><AddOutlinedIcon fontSize="small" /></span>
        </button>
         
      </form>
      
    </div>
  );
};
export default ScriptComponent;
