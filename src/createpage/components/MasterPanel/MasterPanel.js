import React, { Component } from "react";
import "./MasterPanel.css";
import DetailPanel from "../DetailPanel/DetailPanel.js";
import { Form, Input, Segment, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import java_icon from "./images/java_logo.svg";
import node_icon from "./images/node_js_logo.svg";

class MasterPanel extends Component {
  state = { group1: null, group2: null, group3: null };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <div>
        <h2 id="title-content">컨테이너 생성</h2>
        <div className="inner-content">
          <Segment>
            <Form size="large">
              <Form.Field inline>
                <label htmlFor="name">컨테이너 이름</label>
                <Input
                  id="name"
                  placeholder="알파벳, 숫자, _만 포함해야 합니다. 0/20"
                />
              </Form.Field>
            </Form>

            <h4 className="ui dividing header"></h4>

            <Form size="large">
              <Form.TextArea
                width={13}
                label="컨테이너 설명"
                placeholder="컨테이너 설명을 입력해주세요. 0/100"
              />
            </Form>

            <h4 className="ui dividing header"></h4>

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

            <h4 className="ui dividing header"></h4>

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

            <h4 className="ui dividing header"></h4>

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
                />
                <Form.Radio
                  label="Bitbucket"
                  name="group3"
                  value="bit"
                  checked={this.state.group3 === "bit"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Git"
                  name="group3"
                  value="git"
                  checked={this.state.group3 === "git"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>

            <h4 className="ui dividing header"></h4>

            <Form size="large">
              <Form.Group inline>
                <label>소프트웨어 스택</label>
              </Form.Group>
              <div className="icon-items">
                <a className="icon-item">
                  <img
                    className="icons"
                    src={java_icon}
                    width="100"
                    height="100"
                  />
                </a>
                <a className="icon-item">
                  <img
                    className="icons"
                    src={node_icon}
                    width="100"
                    height="100"
                  />
                </a>
              </div>
              <DetailPanel />
            </Form>

            <h4 className="ui dividing header"></h4>

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

        <div>
          <Button
            className="right-button"
            color="blue"
            content="생성"
            size="large"
          />
        </div>
      </div>
    );
  }
}

export default MasterPanel;
