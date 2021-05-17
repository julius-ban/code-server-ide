import React from 'react';
import "./PostWrapper.css"

const PostWrapper = ({children}) => {
    return <div className="PostWrapper" style={{float: 'center'}}>{children}</div>;
};

export default PostWrapper;