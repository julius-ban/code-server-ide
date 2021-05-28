import React from 'react';
import ReactDOM from 'react-dom';
import MasterPanel from '../createpage/components/MasterPanel/MasterPanel.js'

describe('<MasterPanel>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MasterPanel />, div);
        ReactDOM.unmountComponentAtNode(div);
      });    
});