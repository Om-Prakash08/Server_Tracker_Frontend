import { useState } from "react";
import AlertComponent from "../Component/AlertComponent/AlertComponent";
import ScriptComponent from "../Component/ScriptComponent/ScriptComponent";
import ServerComponent from "../Component/ServiceComponent/ServiceComponent";

const MainContent = () => {
  const [AlertSelected ,setAlertSelected]=useState('Alert 2') ;
  return (
    <div className="col-xxl-10 containt">
      <h1 className="containt-heading">Server Tracker</h1>
      <p>See all type of server side alerts</p>
      <div className="row three-part-outer-div">
        <ServerComponent />
        <AlertComponent onChange={setAlertSelected}/>
        <ScriptComponent AlertType={AlertSelected} />
      </div>
    </div>
  );
};

export default MainContent;
