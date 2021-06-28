import React, { Component } from 'react';
import {PostWrapper, MasterPanel} from "../../components"

class nPostContainer extends Component {
    render() {
        return (
            <div>
                <PostWrapper>
                    <MasterPanel userId={this.props.location.state.userId}></MasterPanel>
                </PostWrapper>
            </div>
        );
    }
}

export default nPostContainer;