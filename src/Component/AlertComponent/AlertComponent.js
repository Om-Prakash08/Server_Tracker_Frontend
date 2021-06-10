import { useState, useEffect } from "react";
import Radio from "./Radio";

const AlertComponent = (props) => {
  const {onChange} =props ;
  const [selected, setSelected] = useState("Alert 2");


  useEffect(() => {
      onChange(selected);
      // eslint-disable-next-line
  }, [selected]);

  return (
    <div className="col-lg-2 second">
      <Radio
        value="Alert 1"
        selected={selected}
        text="Alert 1"
        onChange={setSelected}
      />
      <Radio
        value="Alert 2"
        selected={selected}
        text="Alert 2"
        onChange={setSelected}
      />
      <Radio
        value="Alert 3"
        selected={selected}
        text="Alert 3"
        onChange={setSelected}
      />
    </div>
  );
};
export default AlertComponent;
