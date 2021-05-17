import React from 'react';
import './DetailPanel.css';
import {Button} from 'semantic-ui-react';

const DetailPanel = () => (
    <div className="DetailPanel">
        <h2>컨테이너</h2>
        <Button
            className="Navigate-right-button"
            color="grey"
            content="+ 새 컨테이너"
        />
    </div>
)

export default DetailPanel;