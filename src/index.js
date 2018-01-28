import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import storage from './store';
import { downloadDesires } from './actions'

import "font-awesome/css/font-awesome.css";

storage.dispatch(downloadDesires());

ReactDOM.render(
    <Provider store={storage}>
        <Router>
            <App/>
        </Router>
    </Provider>,
document.getElementById('root'));
