import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CardContainer from './CardContainer';
import './main.css';

ReactDOM.render(<CardContainer />, document.getElementById('root'));
registerServiceWorker();
