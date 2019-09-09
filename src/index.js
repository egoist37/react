import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MainLayout from './layout';
import Routing from './router';
import { Header } from './header';
import { CartResult } from './cart/cart-result';
import * as serviceWorker from './serviceWorker';

import Router from './router';
import { Clock } from './clock';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/'>
          <Route path="/" component={MainLayout} />
          <Route exact path="/" component={Header} />
          <Route path="/catalog" component={App} />
          <Route path="/cart" component={CartResult} />
          <Route path="/:id(\d+)" component={Clock} />
        </Route>
    </BrowserRouter>,
    document.getElementById('root'));

// ReactDOM.render(
//     Routing,
//     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
