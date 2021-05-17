import React from "react";
import "./LeftWrapper.css";

// children is props.
const LeftWrapper = ({ children }) => {
  return <div className="LeftWrapper" style={{float: 'left'}}>{children}</div>;
};

export default LeftWrapper;