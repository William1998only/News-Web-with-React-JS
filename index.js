import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExampleRouting from './ExampleRouting';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExampleRouting />, document.getElementById('root'));
registerServiceWorker();
