import { useEffect, useState } from "react";
import AlertComponent from "../Component/AlertComponent/AlertComponent";
import ScriptComponent from "../Component/ScriptComponent/ScriptComponent";
import ServerComponent from "../Component/ServiceComponent/ServiceComponent";

const MainContent = () => {
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
  }, [serviceAlertData]);

  return (
    <div className="col-xxl-10 containt">
      <h1 className="containt-heading">Server Tracker</h1>
      <p>See all type of server side alerts</p>
      <div className="row three-part-outer-div">
        <ServerComponent setServiceData={setServiceAlertData} />
        <AlertComponent
          serverIsSelected={serverSelected}
          serviceData={serviceAlertData}
          onChanged={setServiceAlertData}
        />
        <ScriptComponent
          serviceAlertData={serviceAlertData}
          AlertType={serviceAlertData.alertName}
        />
      </div>
    </div>
  );
};

export default MainContent;
