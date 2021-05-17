import React, { Component } from 'react';
import {Header, PostWrapper, MasterPanel} from "../../components"

class nPostContainer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <PostWrapper>
                        <MasterPanel></MasterPanel>
                    </PostWrapper>
                </div>
            </div>
        );
    }
}

export default nPostContainer;