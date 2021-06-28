import React, { Component } from 'react';
import './SideBar.css';
class SideBar extends Component {
    state = {
        id : "Danawa1",
        checked : {"Danawa1" : true}
    };

    handleCheck = (e) => {
        this.setState({ id : e.target.innerText, checked : { [e.target.innerText] : true }});
        setTimeout(() => {
            this.props.onCreate(this.state); 
        });
    }
    
    render() {
        return (
            <div className="SideBar">
                <h4>사용자</h4>
                <h3 onClick={this.handleCheck} style={this.state.checked["Danawa1"] === true ? {background : "yellow"} : {}}>Danawa1</h3>
                <h3 onClick={this.handleCheck} style={this.state.checked["Danawa2"] === true ? {background : "yellow"} : {}}>Danawa2</h3>
            </div>
        );
    }
}

export default SideBar;