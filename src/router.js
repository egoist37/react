import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MainLayout from './layout';
import Routing from './router';
import { Header } from './header';
import * as serviceWorker from './serviceWorker';

import Router from './router';

export default (
  <BrowserRouter>
        <Route path='/'>
          <Route path="" component={MainLayout} />
          <Route path="/:id(\d+)" component={Header} />
        </Route>
        
        <Route path='/catalog' component={App} />
    </BrowserRouter>
);
