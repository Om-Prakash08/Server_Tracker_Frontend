import { useState } from "react";
import  Radio  from "./Radio";

const AlertComponent = () => {
  const [selected, setSelected] = useState("Alert 2");
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
