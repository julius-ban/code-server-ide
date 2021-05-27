import React, { Component } from "react";
import "./MasterPanel.css";
import DetailPanel from "../DetailPanel/DetailPanel.js";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Form,
  Input,
  Segment,
  Button,
  Confirm,
  Message,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import java_icon from "./images/java_logo.svg";
import node_icon from "./images/node_js_logo.svg";
import axios from "axios";

// 도커를 통한 신규 컨테이너 생성 및 실행
async function createContainer() {
  let c_id;
  try {
    let newContainer = await axios({
      method: "post",
      url: "/containers/create",
      data: {
        Hostname: "test",
        Image: "java_spring_vscode:latest",
        ExposedPorts: {
          "10000/tcp": {},
        },
        HostConfig: {
          Binds: [],
          NetworkMode: "bridge",
          //Exposed된 컨테이너의 포트와 지정한 호스트 포트 번호를 바인딩한다.
          PortBindings: {
            "10000/tcp": [
              {
                HostPort: "10001",
              },
            ],
          },
        },
      },
    });

    c_id = newContainer.data.Id;

    if (c_id !== null) {
      await axios({
        method: "post",
        url: "/containers/" + c_id + "/start",
      });
    } else {
      console.log("컨테이너가 시작되지 않았습니다.");
    }
  } catch (e) {
    console.log(e);
  }
  return c_id;
}

// 컨테이너 DB 인서트
function insertTable(id, state) {
  // 생성 API 호출
  axios({
    method: "post",
    url: "/api/insert",
    data: {
      user_id: state.user_id,
      container_id: id,
      container_nm: state.input_data.name,
      note_txt: state.input_data.content,
      region_cd: state.group1,
      tmpl_cd: state.group2,
      tmpl_dtl: state.group3,
      stack_cd: state.imageClicked,
      pkg_1: state.pkg_1,
      pkg_2: state.pkg_2,
      pkg_3: state.pkg_3,
    },
  });
}


class MasterPanel extends Component { 
  state = {
    group1: "kor",
    group2: "pub",
    group3: "non",
    group3_disable: true,
    imageClicked: "java",
    open: false,
    loadOfDatas: false,
    result: "",
    pkg_1: "no",
    pkg_2: "no",
    pkg_3: "no",
    input_data: {
      name: "",
      content: "",
    },
    error_msg: {
      valid_name: "",
      valid_content: "",
    },
    user_id: "Danawa1"
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

  // 추가 패키지 제어함수
  handlePkgChange = (e, { value }) => {
    if (value === "1" && this.state.pkg_1 === "no") {
      this.setState({ pkg_1: "yes" });
    } else {
      this.setState({ pkg_1: "no" });
    }

    if (value === "2" && this.state.pkg_2 === "no") {
      this.setState({ pkg_2: "yes" });
    } else {
      this.setState({ pkg_2: "no" });
    }

    if (value === "3" && this.state.pkg_3 === "no") {
      this.setState({ pkg_3: "yes" });
    } else {
      this.setState({ pkg_3: "no" });
    }
  };

  // 밸리데이션 체크 & 입력
  handleInputData = (e) => {
    let tg = e.target;
    let formError = this.state.error_msg;
    let formInput = this.state.input_data;

    if (tg.name === "name" && tg.value.length > 20) {
      formError.valid_name = "컨테이너 이름은 20자로 제한됩니다.";
    } else if (tg.name === "name" && /[^a-zA-Z0-9]/.test(tg.value) === true) {
      formError.valid_name = "컨테이너 이름은 영어 혹은 숫자만 허용됩니다.";
    } else if (tg.name === "content" && tg.value.length > 100) {
      formError.valid_content = "컨테이너 내용은 100자로 제한됩니다.";
    } else {
      if (tg.name === "name") {
        formInput.name = tg.value;
        formError.valid_name = "";
      } else if (tg.name === "content") {
        formInput.content = tg.value;
        formError.valid_content = "";
      }
    }
    this.setState({ error_msg: formError });
  };

  // 이미지 클릭 이벤트
  imageClick = (e) => {
    let name = e.target.name;
    this.setState({ imageClicked: name });
  };

  // 생성 버튼 ok 콜백함수
  handleConfirm = async () => {
    this.setState({ result: "yes", open: false, loadOfDatas: true, user_id: this.props.userId});
    insertTable(await createContainer(), this.state);
    // setTimeout(() => { // context에서 arrow 반드시 사용..?
    //   this.setState({loadOfDatas : false});
    // })
  };

  handleCancel = () => this.setState({ result: "no", open: false });
  show = () => this.setState({ open: true });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Dimmer className="loadingBar" active={this.state.loadOfDatas}>
          <Loader
            style={
              this.state.loadOfDatas === true
                ? { display: "none" }
                : { display: "block" }
            }
          >
            컨테이너 생성중..
          </Loader>
          <div
            id="done-panel"
            style={
              this.state.loadOfDatas === true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <h2 id="done-panel-header">컨테이너 생성 완료 !</h2>
            <h3 id="done-panel-body">신규 컨테이너가 생성되었습니다.</h3>
            <Link to="/">
              <Button
                content="대시보드로 이동"
                color="olive"
                onClick={this.handleClose}
              />
            </Link>
          </div>
        </Dimmer>
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
                  onChange={this.handleInputData}
                />
                <Message
                  warning
                  style={
                    this.state.error_msg.valid_name !== ""
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <Message.Header>경고</Message.Header>
                  <p>{this.state.error_msg.valid_name}</p>
                </Message>
              </Form.Field>
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.TextArea
                width={13}
                name="content"
                label="컨테이너 설명"
                placeholder="컨테이너 설명을 입력해주세요. 0/100"
                onChange={this.handleInputData}
              />
              <Message
                warning
                style={
                  this.state.error_msg.valid_content !== ""
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Message.Header>경고</Message.Header>
                <p>{this.state.error_msg.valid_content}</p>
              </Message>
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
                    style={
                      this.state.imageClicked === "java"
                        ? { background: "#DBFFD5", border: "solid 0.3em" }
                        : { background: "#F2F3F7" }
                    }
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
                    style={
                      this.state.imageClicked === "node"
                        ? { background: "#DBFFD5", border: "solid 0.3em" }
                        : { background: "#F2F3F7" }
                    }
                    width="100"
                    height="100"
                    onClick={this.imageClick}
                  />
                </a>
              </div>
              <DetailPanel imageClicked={this.state.imageClicked} />
            </Form>

            <h4 className="ui dividing header"> </h4>

            <Form size="large">
              <Form.Group inline>
                <label>추가 모듈/패키지</label>
                <Form.Checkbox
                  label="Mysql 설치"
                  onClick={this.handlePkgChange}
                  value="1"
                ></Form.Checkbox>
                <Form.Checkbox
                  label="mysql-ctl 명령 추가"
                  onClick={this.handlePkgChange}
                  value="2"
                ></Form.Checkbox>
                <Form.Checkbox
                  label="MongoDb 설치"
                  onClick={this.handlePkgChange}
                  value="3"
                ></Form.Checkbox>
              </Form.Group>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

export default MasterPanel;
