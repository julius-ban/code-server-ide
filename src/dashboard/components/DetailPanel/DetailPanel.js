import React from "react";
import "./DetailPanel.css";
import { Button } from "semantic-ui-react";
import img from "./images/create_container.svg";
import { Link } from "react-router-dom";

const DetailPanel = () => (
  <div className="DetailPanel">
    <h3>컨테이너</h3>
    <Link to="/newContainer">
      <Button
        className="Navigate-right-button"
        color="grey"
        content="+ 새 컨테이너"
      />
    </Link>
    <Link to="/newContainer">
      <div className="content">
        <h4 className="content-text">새 컨테이너(0/5)</h4>
        <img src={img} width="300" height="300" alt="새 컨테이너" />
      </div>
    </Link>
  </div>
);

export default DetailPanel;
