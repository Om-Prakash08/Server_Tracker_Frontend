import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./ServiceComponent.css";
import axios from "axios";

const ServerComponent = (props) => {
  const [service, setService] = useState(null);
  const [serviceList, setServiceList] = useState([]);
  const [group, setGroup] = useState(null);
  const [groupList, setGroupList] = useState([]);
  const [server, setServer] = useState(null);
  const [serverList, setServerList] = useState([]);

  useEffect(() => {
    const getServieList = async () => {
      try {
        const resp = await axios({
          method: "GET",
          url: "http://localhost:5000/service/",
        });
        setServiceList(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    getServieList();
  }, []);

  useEffect(() => {
    const getGroupList = async () => {
     const id=service.serviceId ;
      try {
        const resp = await axios.get(
          'http://localhost:5000/servergrp',
          {params: {
            serviceId:id,
          }}
        ); 
        setGroupList(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (service) getGroupList();
  }, [service]);

  useEffect(() => {
    const getServerList = async () => {
      const id=group.serverGrpId ;
      console.log(id);
      try {
        const resp = await axios.get(
          "http://localhost:5000/server",
          {params: {
            serverGrpId:id,
          }}
        );
        setServerList(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (group) getServerList();
  }, [group]);


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

  
  const { setServiceData } = props;
  useEffect(() => {
    if (service && group && server)
      setServiceData({
        serviceId: service.serviceId,
        serviceName: service.ServiceName,
        groupId: group.serverGrpId,
        groupName: group.serverGrpName,
        serverId: server.serverId,
        serverName: server.serverName,
        alertId: "",
        alertName: "",
      });
    // eslint-disable-next-line
  }, [server]);

  return (
    <div className="col-lg-3 first">
      <div className="Dropdown-container">
        <b>Service</b>
        <Select
          placeholder="Select Service"
          value={service}
          options={serviceList}
          onChange={handleserviceChange}
          getOptionLabel={(x) => x.serviceName}
          getOptionValue={(x) => x.serviceId}
        />
        <br />
        <b>Service Group</b>
        <Select
          placeholder="Select Service Group"
          value={group}
          options={groupList}
          onChange={handleGroupChange}
          getOptionLabel={(x) => x.serverGrpName}
          getOptionValue={(x) => x.serverGrpId}
        />
        <br />
        <b>Server</b>
        <Select
          placeholder="Select Server"
          value={server}
          options={serverList}
          onChange={handleServerChange}
          getOptionLabel={(x) => x.serverName}
          getOptionValue={(x) => x.serverId}
        />
      </div>
    </div>
  );
};

export default ServerComponent;
