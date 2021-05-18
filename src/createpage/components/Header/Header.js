import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Header.css";

const Header = () => (
  <div className="N_Header">
    <Link to="/">
      <Button
        className="navigate-left-button"
        color="grey"
        content="대시보드로 돌아가기"
        size="large"
      />
    </Link>
    <Button 
      className="navigate-right-button"
      color="blue"
      content="컨테이너 생성"
      size="large"
    />
  </div>
);

export default Header;
