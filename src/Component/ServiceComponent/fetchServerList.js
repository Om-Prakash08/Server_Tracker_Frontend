import axios from "axios";
//const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzkzODY4LWZjYTctNGZjYy1hZWVjLTBlNDE0ZGI4ZjNiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNDI2MTMxMH0.Nma6U7J2wabQ36P4S3IlOqggp4xbbIDnbq_vdVUKGs8" ;
const getServiceList = async (setServiceList,token) => {
  try {
    const resp = await axios.get("http://localhost:3001/service/", {
      headers: {
        "x-auth-token": token ,
      },
    });
    console.log(resp.data) ;
    setServiceList(resp.data);
  } catch (err) {
    console.error(err);
  }
};

const getGroupList = async (setGroupList, service,token) => {
  const name = service.serviceName;
  try {
    const resp = await axios({
      method: "POST",
      url: `http://localhost:3001/serverGrp/`,
      data: {
        serviceName:name,
      },
      headers: {
        "x-auth-token": token ,
      },
    });
    setGroupList(resp.data);
  } catch (err) {
    console.error(err);
  }
};

const getServerList = async (setServerList, group,token) => {
  const name = group.serverGrpName;
  try {
    const resp = await axios({
      method: "POST",
      url: `http://localhost:3001/server/`,
      data: {
        serverGrpName:name,
      },
      headers: {
        "x-auth-token": token ,
      },
    });
    setServerList(resp.data);
  } catch (err) {
    console.error(err);
  }
};

export { getServiceList, getGroupList, getServerList };
