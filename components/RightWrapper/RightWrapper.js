import React from "react";
import "./RightWrapper.css";

// children is props.
const RightWrapper = ({ children }) => {
  return <div className="RightWrapper">{children}</div>;
};

export default RightWrapper;