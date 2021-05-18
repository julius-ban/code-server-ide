import React, { Component } from 'react';
import "./DetailPanel.css";
import { Dropdown, Label, Form} from "semantic-ui-react";

const temp_options = [
  { key: 1, text: 'Java 콘솔 프로젝트', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const os_options = [
    { key: 1, text: 'Ubuntu 14.04 LTS', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

class DetailPanel extends Component {
    render() {
        return (
            <div className = "detail-body">
                <Form className="detail-template-head" size="medium">
                    <Form.Field id="detail-template-drop">
                        <label>Template</label>
                        <Dropdown className="dropdown" clearable selection options={temp_options}/>
                    </Form.Field>
                    <Form.Field id="detail-template-drop">
                        <label>OS</label>
                        <Dropdown className="dropdown" clearable selection options={os_options}/>
                    </Form.Field>
                    <Form.Field inline id="detail-template-content">
                        <Label size="large">
                            Java
                            <Label.Detail>2.4</Label.Detail>
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
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default DetailPanel;