import React, { Component } from "react";
import { Header, LeftWrapper, RightWrapper, SideBar, DetailPanel } from "../../components";

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.state = {userId: "Danawa1"}
  }

  handleCreate = data => {
    this.setState({userId : data.id});
  }

  render() {
    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <div>
          <LeftWrapper>
            <SideBar onCreate={this.handleCreate}/>
          </LeftWrapper>
        </div>
        <div>
          <RightWrapper>
            <DetailPanel userId={this.state}></DetailPanel>
          </RightWrapper>
        </div>
      </div>
    );
  }
}

export default PostContainer;
