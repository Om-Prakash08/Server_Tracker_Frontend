import { useState, useEffect } from "react";
import Radio from "./Radio";
import axios from "axios";

const AlertComponent = (props) => {
  const { onChanged, serviceData,token } = props;
  const [serverIsSelected, setServerSelected] = useState(false);
  const [alertList, setAlertList] = useState([]);
  const [selected, setSelected] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    const getAlertList = async () => {
      try {
        const resp = await axios({
          method: "GET",
          url: `http://localhost:3001/alert`,
          headers: {
            "x-auth-token": token ,
          },
        });
        setAlertList(resp.data);
        // console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (serviceData) getAlertList();
    // eslint-disable-next-line
  }, [serviceData]);

  useEffect(() => {
    if (serverIsSelected && selected) {
      onChanged({
        ...serviceData,
        alertId: selected.id,
        alertName: selected.name,
      });
    }
    // eslint-disable-next-line
  }, [selected, serverIsSelected]);
  useEffect(() => {
    if (serviceData.serverId) {
      setServerSelected(true);
    } else {
      setServerSelected(false);
    }
  }, [serviceData]);
  // console.log("serverId=", serviceData.serverId);
  // console.log("serverGrpId=", serviceData.groupId);

  return (
    <div className="col-lg-2 second">
      <div className="alert-heading-div">
        <h1 className="Alert-heading">Alert</h1>
      </div>
      <div className="radio-container">
        {alertList.map((alert) => (
          <Radio
            key={alert.alertId}
            id={alert.alertId}
            value={alert.alertName}
            selected={selected}
            text={alert.alertName}
            onChange={setSelected}
          />
        ))}
      </div>
      {!serverIsSelected && selected.id && (
        <p className="error-occured" style={{ marginTop: 8 }}>
          Please select server first.
        </p>
      )}
    </div>
  );
};
export default AlertComponent;
