import React from 'react';
import { render }from 'react-dom';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import App from './App';
import '../scss/main.scss';

const history =  createBrowserHistory();

render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('app')
);
