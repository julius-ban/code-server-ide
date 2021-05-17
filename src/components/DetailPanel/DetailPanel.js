import React from "react";
import "./DetailPanel.css";
import { Button } from "semantic-ui-react";
import img from "./images/create_container.svg";

const DetailPanel = () => (
  <div className="DetailPanel">
    <h2>Container</h2>
    <Button
      className="Navigate-right-button"
      color="grey"
      content="+ 새 컨테이너"
    />
    <div>
      <h3>새 컨테이너(0/5)</h3>
      <img src={img} width="300" height="300" alt="새 컨테이너"/>
    </div>
  </div>
);

export default DetailPanel;
