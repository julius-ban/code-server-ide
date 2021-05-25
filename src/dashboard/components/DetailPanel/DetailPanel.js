import React, { Component } from "react";
import "./DetailPanel.css";
import { Button, Label, Card, Dimmer, Loader} from "semantic-ui-react";
import img from "./images/create_container.svg";
import { Link } from "react-router-dom";
import axios from "axios";

class DetailPanel extends Component {
  state = {
    container: null
  };

  // DOM 마운트 후
  componentDidMount() {
    this._getContainer();
  }

  // 컨테이너 조회
  _getContainer = async () => {
    const res = await axios.get("/api/search");
    this.setState({ container: res.data.container });
  };

  // state 변경사항 있을때 다시 그리기 여부
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.container !== this.state.container) return true;
  }

  // 컨테이너 삭제
  handleDelete = async (e) => {
    let data = this.state.container[e.target.value];
    
    // 컨테이너 정지 후 제거
    await axios.post("/containers/"+ data.container_id + "/stop");
    await axios.delete("/containers/"+ data.container_id);
    await axios.post("/api/delete", data);
    this._getContainer();
  };

  render() {
    let items = this.state.container;
    let items_1 = items != null && items.length > 0 ? true : false;
    let items_2 = items != null && items.length > 1 ? true : false;
    let items_3 = items != null && items.length > 2 ? true : false;
    let items_4 = items != null && items.length > 3 ? true : false;
    let items_5 = items != null && items.length > 4 ? true : false;

    return (
      <div className="DetailPanel">
        <h3>컨테이너</h3>
        <Link to="/newContainer">
          <Button
            className="Navigate-right-button"
            color="grey"
            content="+ 새 컨테이너"
          />
        </Link>
        <div
          className="content"
          style={items_1 ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={items_1 ? items[0].container_nm : ""} />
            <Card.Content
              id="card"
              description={items_1 ? items[0].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{items_1 ? items[0].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{items_1 ? items[0].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
                onClick={() => window.open('http://localhost:10001/', '_blank')}
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
          style={items_2 ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={items_2 ? items[1].container_nm : ""} />
            <Card.Content
              id="card"
              description={items_2 ? items[1].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{items_2 ? items[1].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{items_2 ? items[1].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
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
          style={items_3 ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={items_3 ? items[2].container_nm : ""} />
            <Card.Content
              id="card"
              description={items_3 ? items[2].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{items_3 ? items[2].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{items_3 ? items[2].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
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
          style={items_4 ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={items_4 ? items[3].container_nm : ""} />
            <Card.Content
              id="card"
              description={items_4 ? items[3].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{items_4 ? items[3].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{items_4 ? items[3].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
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
          style={items_5 ? { display: "block" } : { display: "none" }}
        >
          <Card className="container">
            <Card.Content header={items_5 ? items[4].container_nm : ""} />
            <Card.Content
              id="card"
              description={items_5 ? items[4].note_txt : ""}
            />
            <Card.Content extra>
              <Label className="container-text-lang" color="teal">
                Language
                <Label.Detail>{items_5 ? items[4].stack_cd : ""}</Label.Detail>
              </Label>
              <Label className="container-text-zone" color="yellow">
                Region
                <Label.Detail>{items_5 ? items[4].region_cd : ""}</Label.Detail>
              </Label>
              <Button
                className="content-button"
                content="▶ 터미널 실행"
                color="black"
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
        <Link to="/newContainer">
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
