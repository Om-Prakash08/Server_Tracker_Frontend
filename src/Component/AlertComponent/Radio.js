import React from "react";
import "./radio.css";

const Radio = (props) => {
  const { selected, onChange, text, value, id } = props;
  return (
    <div
      className={`modern-radio-container ${
        value === selected.name && "selected-container"
      }`}
      onClick={() => {
        onChange({ id: id, name: value });
      }}
    >
      <div
        className={`radio-outer-circle ${
          value !== selected.name && "unselected"
        }`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected.name && "unselected-circle"
          }`}
        />
      </div>
      <div
        className={`helper-text ${
          value === selected.name && "helper-selected-text"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Radio;
