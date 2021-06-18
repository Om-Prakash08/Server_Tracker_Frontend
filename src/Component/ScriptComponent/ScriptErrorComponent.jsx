import React from "react";

const ScriptErrorComponent = (props) => {
  const { Apierror, emptyAlertError, success, AlertType } = props;
  return (
    <React.Fragment>
      {Apierror && (
        <p className="error-occured" style={{ marginLeft: 0 }}>
          Failed, please try again.
        </p>
      )}
      {emptyAlertError && !AlertType && (
        <p className="error-occured" style={{ marginLeft: 0 }}>
          Please select alert first.
        </p>
      )}
      {success && !Apierror && !emptyAlertError && (
        <p className="success-occured" style={{ marginLeft: 0 }}>
          Successfully saved!
        </p>
      )}
    </React.Fragment>
  );
};
export default ScriptErrorComponent;
