import React from 'react';
import ReactDOM from 'react-dom';
import DetailPanel from '../dashboard/components/DetailPanel/DetailPanel.js'

describe('<DetailPanel>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DetailPanel />, div);
        ReactDOM.unmountComponentAtNode(div);
      });    
});