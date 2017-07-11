import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datepicker from './date-picker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Datepicker />, document.getElementById('root'));
registerServiceWorker();
