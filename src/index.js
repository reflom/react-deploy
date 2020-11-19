import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import { Router, BrowserRouter } from 'react-router-dom';
import history from './history';

ReactDOM.render(
    <BrowserRouter history={history}>
        <App /> 
    </BrowserRouter>
, document.getElementById('root'));