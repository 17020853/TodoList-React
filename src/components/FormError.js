import React from "react";

const FormError = ({isHidden}) => {
  if (isHidden) {
    return null;
  }

  return <div style={{color: "red"}}>Required</div>;
};

export default FormError;
