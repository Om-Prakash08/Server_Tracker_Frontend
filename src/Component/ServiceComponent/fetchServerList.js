import axios from "axios";
const getServiceList = async (setServiceList,token) => {
  try {
    const resp = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/service/`, {
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
      url: `${process.env.REACT_APP_BACKEND_API_URL}/serverGrp/`,
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
      url: `${process.env.REACT_APP_BACKEND_API_URL}/server/`,
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
