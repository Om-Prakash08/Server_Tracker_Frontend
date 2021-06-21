import React, { useState, useEffect } from "react";
import "./ServiceComponent.css";
import ServiceRenderPage from "./serviceRenderPage";
import { getServiceList, getGroupList, getServerList } from "./fetchServerList";

const ServerComponent = (props) => {
  const { setServiceData, serviceData ,token } = props;
  const [service, setService] = useState(null);
  const [serviceList, setServiceList] = useState([]);
  const [group, setGroup] = useState(null);
  const [groupList, setGroupList] = useState([]);
  const [server, setServer] = useState(null);
  const [serverList, setServerList] = useState([]);

  useEffect(() => {
    getServiceList(setServiceList,token);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (service) {
      getGroupList(setGroupList, service,token);
      setServiceData({
        serviceId: service.serviceId,
        serviceName: service.ServiceName,
        groupId: "",
        groupName: "",
        serverId: "",
        serverName: "",
        alertId: "",
        alertName: "",
      });
    } else {
      setServiceData({
        serviceId: "",
        serviceName: "",
        groupId: "",
        groupName: "",
        serverId: "",
        serverName: "",
        alertId: "",
        alertName: "",
      });
    } // eslint-disable-next-line
  }, [service]);

  useEffect(() => {
    if (group) {
      getServerList(setServerList, group,token);
      setServiceData({
        ...serviceData,
        groupId: group.serverGrpId,
        groupName: group.serverGrpName,
        serverId: "",
        serverName: "",
        alertId: "",
        alertName: "",
      });
    } else {
      setServiceData({
        ...serviceData,
        groupId: "",
        groupName: "",
        serverId: "",
        serverName: "",
        alertId: "",
        alertName: "",
      });
    }
    // eslint-disable-next-line
  }, [group]);

  useEffect(() => {
    if (server) {
      setServiceData({
        ...serviceData,
        serverId: server.serverId,
        serverName: server.serverName,
        alertId: "",
        alertName: "",
      });
    } else {
      setServiceData({
        ...serviceData,
        serverId: "",
        serverName: "",
        alertId: "",
        alertName: "",
      });
    }
    // eslint-disable-next-line
  }, [server]);

  // handle change event of the service dropdown
  const handleserviceChange = (obj) => {
    setService(obj);
    setGroup(null);
  };

  // handle change event of the groupuage dropdown
  const handleGroupChange = (obj) => {
    setGroup(obj);
    setServer(null);
  };

  const handleServerChange = (obj) => {
    setServer(obj);
  };

  return (
    <ServiceRenderPage
      service={service}
      serviceList={serviceList}
      handleserviceChange={handleserviceChange}
      group={group}
      groupList={groupList}
      handleGroupChange={handleGroupChange}
      server={server}
      serverList={serverList}
      handleServerChange={handleServerChange}
    />
  );
};

export default ServerComponent;