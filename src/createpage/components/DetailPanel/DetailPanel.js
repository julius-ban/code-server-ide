import React, { Component } from "react";
import "./DetailPanel.css";
import { Dropdown, Label, Form } from "semantic-ui-react";

const temp_options = [
  {
    name: "java",
    temp_content: [
      { text: "Java 콘솔 프로젝트", value: 1 },
      { text: "Java 상속 예제", value: 2 },
      { text: "Java 쓰레드 예제", value: 3 },
      { text: "Java 파일 I/O 예제", value: 4 },
      { text: "Java HashMap 예제", value: 5 },
      { text: "Java 예외처리 예제", value: 6 },
      { text: "Java Swing 프로젝트", value: 7 },
      { text: "JavaFx 프로젝트", value: 8 },
      { text: "Java AWT 프로젝트", value: 9 },
      { text: "Java 빈 프로젝트", value: 10 },
    ],
    os_content: [{text: "Ubuntu 14.04 LTS", value: 1 }],
  },
  {
    name: "node",
    temp_content: [
      { text: "Node.js 프로젝트", value: 1 },
      { text: "Node.js 빈 프로젝트", value: 2 },
    ],
    os_content: [
      { text: "Ubuntu 18.04 LTS", value: 1 },
      { text: "Ubuntu 16.04 LTS", value: 2 },
    ],
  }
];

class DetailPanel extends Component {
  state = {
    image: this.props.imageClicked.image,
    temp_options: temp_options,
  };

  render() {
    return (
      <div className="detail-body">
          <Form.Field inline id="detail-template-drop">
            <label>Template</label>
            <Dropdown
              className="dropdown"
              clearable
              selection
              options={
                temp_options.find((t) => t.name === this.props.imageClicked)
                  .temp_content
              }
              placeholder='템플릿을 선택하세요'
            />
          </Form.Field>
          <Form.Field inline id="detail-template-drop">
            <label>OS</label>
            <Dropdown
              className="dropdown"
              clearable
              selection
              options={
                temp_options.find((t) => t.name === this.props.imageClicked)
                  .os_content
              }
              placeholder='OS를 선택하세요'
            />
          </Form.Field>
          <Form.Field inline id="detail-template-content">
            <div
              style={
                this.props.imageClicked === "java"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Label size="large">
                Java
                <Label.Detail>9, 8, 7</Label.Detail>
              </Label>
              <Label size="large">
                Maven
                <Label.Detail>3.3.9</Label.Detail>
              </Label>
              <Label size="large">
                Gradle
                <Label.Detail>4.6</Label.Detail>
              </Label>
              <Label size="large">
                Spring Boot
                <Label.Detail>2.0.1</Label.Detail>
              </Label>
            </div>
            <div
              style={
                this.props.imageClicked === "node"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Label size="large">
                Node.js
                <Label.Detail>10.16.3</Label.Detail>
              </Label>
              <Label size="large">
                Polymer
                <Label.Detail>1.9.11</Label.Detail>
              </Label>
              <Label size="large">
                Express3
                <Label.Detail>3.0.1</Label.Detail>
              </Label>
              <Label size="large">
                Express4
                <Label.Detail>4.15.5</Label.Detail>
              </Label>
            </div>
          </Form.Field>
      </div>
    );
  }
}

export default DetailPanel;
