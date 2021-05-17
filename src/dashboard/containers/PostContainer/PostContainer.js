import React, { Component } from "react";
import { Header, LeftWrapper, RightWrapper, SideBar, DetailPanel } from "../../components";

class PostContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <div>
          <LeftWrapper>
            <SideBar></SideBar>
          </LeftWrapper>
        </div>
        <div>
          <RightWrapper>
            <DetailPanel></DetailPanel>
          </RightWrapper>
        </div>
      </div>
    );
  }
}

export default PostContainer;
