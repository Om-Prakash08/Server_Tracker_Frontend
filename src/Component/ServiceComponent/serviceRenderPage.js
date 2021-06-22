import Select from "react-select";

const ServiceRenderPage = (props) => {
  const {
    service,
    serviceList,
    handleserviceChange,
    group,
    groupList,
    handleGroupChange,
    server,
    serverList,
    handleServerChange,
  } = props;
  return (
    <div className="col-lg-3 first">
      <div className="Dropdown-container">
        <div className="select-div">
          <b style={{ margin: 4 }}>Service</b>
          <Select
            placeholder="Select Service"
            value={service}
            options={serviceList}
            onChange={handleserviceChange}
            getOptionLabel={(x) => x.serviceName}
            getOptionValue={(x) => x.serviceId}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: {
                ...theme.colors,

                neutral0: "white",
                neutral50: "rgb(148, 3, 3)",
              },
            })}
          />
        </div>
        <br />
        <div className="select-div">
          <b style={{ margin: 4 }}>Service Group</b>
          <Select
            placeholder="Select Service Group"
            value={group}
            options={groupList}
            onChange={handleGroupChange}
            getOptionLabel={(x) => x.serverGrpName}
            getOptionValue={(x) => x.serverGrpId}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: {
                ...theme.colors,

                neutral0: "white",
                neutral50: "rgb(148, 3, 3)",
              },
            })}
          />
        </div>
        <br />
        <div className="select-div">
          <b style={{ margin: 4 }}>Server</b>
          <Select
            placeholder="Select Server"
            value={server}
            options={serverList}
            onChange={handleServerChange}
            getOptionLabel={(x) => x.serverName}
            getOptionValue={(x) => x.serverId}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: {
                ...theme.colors,

                neutral0: "white",
                neutral50: "rgb(148, 3, 3)",
              },
            })}
          />
        </div>
      </div>
    </div>
  );
};
export default ServiceRenderPage;
