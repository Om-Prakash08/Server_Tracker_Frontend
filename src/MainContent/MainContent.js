import { useEffect, useState } from "react";
import AlertComponent from "../Component/AlertComponent/AlertComponent";
import ScriptComponent from "../Component/ScriptComponent/ScriptComponent.jsx";
import ServerComponent from "../Component/ServiceComponent/ServiceComponent";

const MainContent = (props) => {
  const {token} =props; 
  const [serverSelected, setServerSelected] = useState(false);
  const [serviceAlertData, setServiceAlertData] = useState({
    serviceId: "",
    ServiceName: "",
    groupId: "",
    groupName: "",
    serverId: "",
    serverName: "",
    alertId: "",
    alertName: "",
  });

  useEffect(() => {
    if (serviceAlertData.serverId) {
      setServerSelected(true);
    }
    else{
      setServerSelected(false);
    }
  }, [serviceAlertData]);

  return (
    <div className="col-xxl-10 containt">
      <h1 className="containt-heading">L2 Automation Mapper</h1>
      <div className="row three-part-outer-div">
        <ServerComponent token={token} setServiceData={setServiceAlertData} serviceData={serviceAlertData} />
        <AlertComponent
          token={token}
          serverIsSelected={serverSelected}
          serviceData={serviceAlertData}
          onChanged={setServiceAlertData}
        />
        <ScriptComponent
          token={token}
          serviceAlertData={serviceAlertData}
          AlertType={serviceAlertData.alertName}
        />
      </div>
    </div>
  );
};

export default MainContent;
