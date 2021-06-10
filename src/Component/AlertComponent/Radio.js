// import PropTypes from "prop-types";
import React from "react";
import "./radio.css";

const Radio = (props) => {
  const { selected, onChange, text, value } = props;
  return (
    <div
      className={`modern-radio-container ${
        value === selected && "selected-container"
      }`}
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={`radio-outer-circle ${value !== selected && "unselected"}`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div
        className={`helper-text ${
          value === selected && "helper-selected-text"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Radio;
// Radio.propTypes = {
//   text: PropTypes.node.isRequired,
//   onChange: PropTypes.func.isRequired,
//   selected: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired
// };
