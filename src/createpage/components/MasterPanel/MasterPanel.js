import React, { Component } from "react";
import "./MasterPanel.css";
import DetailPanel from "../DetailPanel/DetailPanel.js";
import { Link } from "react-router-dom";
import { Form, Input, Segment, Button, Confirm } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import java_icon from "./images/java_logo.svg";
import node_icon from "./images/node_js_logo.svg";

class MasterPanel extends Component {
  state = {
    group1: "kor",
    group2: "pub",
    group3: "non",
    group3_disable: true,
    imageClicked: "java",
    open: false,
    result: "",
    error_msg: {
      name: "",
      content: "",
    },
  };

  // 라디오 그룹 제어함수
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    if (name === "group2") {
      value === "pri"
        ? this.setState({ group3_disable: false })
        : this.setState({ group3_disable: true });
    }
  };

  // 입력 폼 밸리데이션 체크
  handleErrorMessage = (e) => {
    let tg = e.target;
    let formError = this.state.error_msg;

    if (tg.name === "name" && tg.value.length > 20) {
      formError.name = "컨테이너 이름은 20자로 제한됩니다.";
    } else if (tg.name === "content" && tg.value.length > 100) {
      formError.content = "컨테이너 설명은 100자로 제한됩니다.";
    } else {
      if (tg.name === "name") {
        formError.name = "";
      } else if (tg.name === "content") {
        formError.content = "";
      }
    }
    this.setState({ error_msg: formError });
  };

  // 이미지 클릭 이벤트
  imageClick = (e) => {
    let name = e.target.name;
    this.setState({ imageClicked : name});
  };

  // 생성 버튼 콜백함수
  handleConfirm = () => this.setState({ result: "yes", open: false });
  handleCancel = () => this.setState({ result: "no", open: false });
  show = () => this.setState({ open: true });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Link to="/">
          <Button
            className="navigate-left-button"
            color="grey"
            content="대시보드로 돌아가기"
            size="large"
          />
        </Link>
        <div>
          <Button
            className="navigate-right-button"
            color="blue"
            content="컨테이너 생성"
            size="large"
            onClick={this.show}
          />
          <Confirm
            open={open}
            header="컨테이너 생성"
            content="컨테이너를 생성하시겠습니까?"
            cancelButton="취소"
            confirmButton="생성"
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
        </div>

        <h2 id="title-content">컨테이너 생성</h2>
        <div className="inner-content">
          <Segment>
            <Form size="large">
              <Form.Field inline>
                <label htmlFor="name">컨테이너 이름</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="영어 혹은 숫자만 허용됩니다. (0/20)"
                  onChange={this.handleErrorMessage}
                />
                <div>{this.state.error_msg.name}</div>
              </Form.Field>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.TextArea
                width={13}
                name="content"
                label="컨테이너 설명"
                placeholder="컨테이너 설명을 입력해주세요. 0/100"
                onChange={this.handleErrorMessage}
              />
              <div>{this.state.error_msg.content}</div>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form className="region" size="large">
              <Form.Group inline className="region">
                <label>지역</label>
                <Form.Radio
                  label="(서울) 한국"
                  name="group1"
                  value="kor"
                  checked={this.state.group1 === "kor"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="(오리건) 미국"
                  name="group1"
                  value="usa"
                  checked={this.state.group1 === "usa"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="(뭄바이) 인도"
                  name="group1"
                  value="ind"
                  checked={this.state.group1 === "ind"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="(프랑크푸르트) 독일"
                  name="group1"
                  value="ger"
                  checked={this.state.group1 === "ger"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.Group inline>
                <label>공개범위</label>
                <Form.Radio
                  label="Public"
                  name="group2"
                  value="pub"
                  checked={this.state.group2 === "pub"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Private"
                  name="group2"
                  value="pri"
                  checked={this.state.group2 === "pri"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.Group inline>
                <label>템플릿</label>
                <Form.Radio
                  label="기본 템플릿"
                  name="group3"
                  value="non"
                  checked={this.state.group3 === "non"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="ZIP / TAR"
                  name="group3"
                  value="zip"
                  checked={this.state.group3 === "zip"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Github"
                  name="group3"
                  value="hub"
                  checked={this.state.group3 === "hub"}
                  onChange={this.handleChange}
                  disabled={this.state.group3_disable}
                />
                <Form.Radio
                  label="Bitbucket"
                  name="group3"
                  value="bit"
                  checked={this.state.group3 === "bit"}
                  onChange={this.handleChange}
                  disabled={this.state.group3_disable}
                />
                <Form.Radio
                  label="Git"
                  name="group3"
                  value="git"
                  checked={this.state.group3 === "git"}
                  onChange={this.handleChange}
                  disabled={this.state.group3_disable}
                />
              </Form.Group>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.Group inline>
                <label>소프트웨어 스택</label>
              </Form.Group>
              <div className="icon-items">
                <a href="#/" className="icon-item">
                  <img
                    className="icons"
                    name="java"
                    alt="java_image"
                    src={java_icon}
                    style={this.state.imageClicked === "java" ? {background:"#DBFFD5", border: "solid 0.3em"} : {background:"#F2F3F7"}}
                    width="100"
                    height="100"
                    onClick={this.imageClick}
                  />
                </a>
                <a href="#/" className="icon-item">
                  <img
                    className="icons"
                    name="node"
                    alt="node_img"
                    src={node_icon}
                    style={this.state.imageClicked === "node" ? {background:"#DBFFD5", border: "solid 0.3em"} : {background:"#F2F3F7"}}
                    width="100"
                    height="100"
                    onClick={this.imageClick}
                  />
                </a>
              </div>
              <DetailPanel imageClicked={this.state.imageClicked}/>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.Group inline>
                <label>추가 모듈/패키지</label>
                <Form.Checkbox label="Mysql 설치"></Form.Checkbox>
                <Form.Checkbox label="mysql-ctl 명령 추가"></Form.Checkbox>
                <Form.Checkbox label="MongoDb 설치"></Form.Checkbox>
              </Form.Group>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

export default MasterPanel;
