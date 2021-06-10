import React, { useState, useEffect } from "react";
import Select from "react-select";
import './ServiceComponent.css' ;

const data = [
  {
    ServiceName: "Service-A",
    id: "Service-A",
    groups: [
      {
        GroupName: "Server Group-1",
        id: "Group-1",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
      {
        GroupName: "Server Group-2",
        id: "Group-2",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
      {
        GroupName: "Server Group-3",
        id: "Group-3",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
    ],
  },
  {
    ServiceName: "Service-B",
    id: "Service-B",
    groups: [
      {
        GroupName: "Server Group-1",
        id: "Group-1",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
      {
        GroupName: "Server Group-2",
        id: "Group-2",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
      {
        GroupName: "Server Group-3",
        id: "Group-3",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
      {
        GroupName: "Server Group-4",
        id: "Group-4",
        servers: [
          { ServerName: "Server 1", id: "server-1" },
          { ServerName: "Server 2", id: "server-2" },
          { ServerName: "Server 3", id: "server-3" },
          { ServerName: "Server 4", id: "server-4" },
        ],
      },
    ],
  },
];


const ServerComponent = () => {
  const [service, setService] = useState(null);
  const [group, setGroup] = useState(null);
  const [groupList, setGroupList] = useState([]);
  const [server, setServer] = useState(null);
  const [serverList, setServerList] = useState([]);
  const [link, setLink] = useState("");

  // handle change event of the service dropdown
  const handleserviceChange = (obj) => {
    setService(obj);
    setGroupList(obj.groups);
    setGroup(null);
  };

  // handle change event of the groupuage dropdown
  const handleGroupChange = (obj) => {
    setGroup(obj);
    setServerList(obj.servers) ;
    setServer(null) ;
  };

  const handleServerChange = (obj) => {
    setServer(obj);
  };


  // generate the link when both dropdowns are selected
  useEffect(() => {
    if (service && group && server) {
      setLink(
        `${service.ServiceName}/${group.GroupName}/${server.ServerName}`
      );
    }
  }, [service, group,server]);

  return (
    <div className="col-lg-3 first">
      <div className="Dropdown-container">
        <b>Service</b>
        <Select
          placeholder="Select Service"
          value={service}
          options={data}
          onChange={handleserviceChange}
          getOptionLabel={(x) => x.ServiceName}
          getOptionValue={(x) => x.id}
        />
        <br />
        <b>Service Group</b>
        <Select
          placeholder="Select Service Group"
          value={group}
          options={groupList}
          onChange={handleGroupChange}
          getOptionLabel={(x) => x.GroupName}
          getOptionValue={(x) => x.id}
        />
        <br />
        <b>Server</b>
        <Select
          placeholder="Select Service"
          value={server}
          options={serverList}
          onChange={handleServerChange}
          getOptionLabel={(x) => x.ServerName}
          getOptionValue={(x) => x.id}
        />
      </div>
      <span style={{marginTop:200}}>
        <b>Link:</b> {service && group ? link : "-"}
      </span>
    </div>
  );
};

export default ServerComponent;
