import React, { Component } from 'react';
import {PostWrapper, MasterPanel} from "../../components"

class nPostContainer extends Component {
    render() {
        return (
            <div>
                <PostWrapper>
                    <MasterPanel></MasterPanel>
                </PostWrapper>
            </div>
        );
    }
}

export default nPostContainer;