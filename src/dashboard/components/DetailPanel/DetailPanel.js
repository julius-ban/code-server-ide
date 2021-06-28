import React, { Component } from "react";
import "./DetailPanel.css";
import { Button, Label, Card, Dimmer, Loader } from "semantic-ui-react";
import img from "./images/create_container.svg";
import { Link } from "react-router-dom";
import axios from "axios";

class DetailPanel extends Component {
  state = {
    container: null,
    loadOfDatas: false,
    userId: this.props.userId,
    port: null
  };
  
  // DOM 마운트 후
  componentDidMount() {
    this._getContainer();
  }

  // 컨테이너 조회
  _getContainer = async (nextState) => {
    const res = await axios.post("/api/search", {userId : nextState || this.state.userId});
    this.setState({ container: res.data.container, loadOfDatas: false, userId : this.props.userId });
  };

  // state 변경사항 있을때 다시 그리기 여부
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.container !== this.state.container) {
      // 삭제 후 다시 그리기
      return true;
    } else if (nextState.loadOfDatas !== this.state.loadOfDatas) {
      // 로딩창 다시 그리기
      return true;
    } else if (nextProps.userId !== this.state.userId) {
      // 유저 선택시 다시 그리기
      this._getContainer(nextProps.userId);
      return true;
    } else {
      return false;
    }
  }

  // 컨테이너 삭제
  handleDelete = async (e) => {
    let data = this.state.container[e.target.value];
    this.setState({ loadOfDatas: true });

    // 컨테이너 정지 후 제거
    try {
      await axios.post("/containers/" + data.container_id + "/stop");
      await axios.delete("/containers/" + data.container_id);
    } catch (e) {
      console.log(e);
    } finally {
      await axios.post("/api/delete", data);
    }

    this._getContainer();
  };
  
  // pushButtons = () => {
  //   console.log(this.state);
  // }

  render() {
    let items = this.state.container;
    let itemsBool = [false, false, false, false, false];

    for(var i=0; i<5; i++){
      if(items != null && items.length > i){
        itemsBool[i] = true;
        // this.setState({port : items[i].port});
      }
    } 

    return (
      <div className="DetailPanel">
        {/* <Button onClick={this.pushButtons}>테스트버튼</Button> */}
        <h3>컨테이너</h3>
        
        <Link to={{pathname : '/newContainer', state : this.state}}>
          <Button
            className="Navigate-right-button"
            color="grey"
            content="+ 새 컨테이너"
          />
        </Link>

        <Dimmer active={this.state.loadOfDatas}>
          <Loader>컨테이너 삭제중..</Loader>
        </Dimmer>
        <div
          className="content"
          style={itemsBool[0] ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={itemsBool[0] ? items[0].container_nm : ""} />
            <Card.Content
              id="card"
              description={itemsBool[0] ? items[0].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{itemsBool[0] ? items[0].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{itemsBool[0] ? items[0].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
                onClick={() => window.open("http://localhost:"+ items[0].port +"/", "_blank")}
              ></Button>
            </Card.Content>
            <Button
              color="blue"
              className="delete-button"
              content="삭제"
              size="mini"
              value="0"
              onClick={this.handleDelete}
            />
          </Card>
        </div>
        <div
          className="content"
          style={itemsBool[1] ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={itemsBool[1] ? items[1].container_nm : ""} />
            <Card.Content
              id="card"
              description={itemsBool[1] ? items[1].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{itemsBool[1] ? items[1].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{itemsBool[1] ? items[1].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
                onClick={() => window.open("http://localhost:"+ items[1].port +"/", "_blank")}
              ></Button>
            </Card.Content>
            <Button
              color="blue"
              className="delete-button"
              content="삭제"
              size="mini"
              value="1"
              onClick={this.handleDelete}
            />
          </Card>
        </div>
        <div
          className="content"
          style={itemsBool[2] ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={itemsBool[2] ? items[2].container_nm : ""} />
            <Card.Content
              id="card"
              description={itemsBool[2] ? items[2].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{itemsBool[2] ? items[2].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{itemsBool[2] ? items[2].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
                onClick={() => window.open("http://localhost:"+ items[2].port +"/", "_blank")}
              ></Button>
            </Card.Content>
            <Button
              color="blue"
              className="delete-button"
              content="삭제"
              size="mini"
              value="2"
              onClick={this.handleDelete}
            />
          </Card>
        </div>
        <div
          className="content"
          style={itemsBool[3] ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={itemsBool[3] ? items[3].container_nm : ""} />
            <Card.Content
              id="card"
              description={itemsBool[3] ? items[3].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{itemsBool[3] ? items[3].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{itemsBool[3] ? items[3].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
                onClick={() => window.open("http://localhost:"+ items[3].port +"/", "_blank")}
              ></Button>
            </Card.Content>
            <Button
              color="blue"
              className="delete-button"
              content="삭제"
              size="mini"
              value="3"
              onClick={this.handleDelete}
            />
          </Card>
        </div>
        <div
          className="content"
          style={itemsBool[4] ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={itemsBool[4] ? items[4].container_nm : ""} />
            <Card.Content
              id="card"
              description={itemsBool[4] ? items[4].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{itemsBool[4] ? items[4].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{itemsBool[4] ? items[4].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
                onClick={() => window.open("http://localhost:"+ items[4].port +"/", "_blank")}
              ></Button>
            </Card.Content>
            <Button
              color="blue"
              className="delete-button"
              content="삭제"
              size="mini"
              value="4"
              onClick={this.handleDelete}
            />
          </Card>
        </div>
        <Link to={{pathname : '/newContainer', state : this.state}}>          
          <div className="content">
            <h4 className="content-text">
              {items != null && items.length > 0
                ? "새 컨테이너 (" + items.length + "/5)"
                : "새 컨테이너 (0/5)"}
            </h4>
            <img src={img} width="300" height="300" alt="새 컨테이너" />
          </div>
        </Link>
      </div>
    );
  }
}

export default DetailPanel;
