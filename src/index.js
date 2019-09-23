import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MainLayout from './layout';
import Routing from './router';
import { Header } from './header';
import { Product } from './item/product';
import { NewProduct } from './item/new-product';
import { CartResult } from './cart/cart-result';
import * as serviceWorker from './serviceWorker';

import Router from './router';
import { Clock } from './clock';

function getUsers() {
  return [{
    id: 123,
    name: 'Sam',
  }];
}

const initialState = {
  // users: getUsers()
};

function user(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': {
      const { id, content } = action.payload;
      console.log(action.payload);
      const users = state.users || [];
      users.push(content);
      state.users = users;
      console.log("state::: ", state);
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

const reducers = combineReducers({
  user
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
        <Route path='/'>
          <Route path="/" component={MainLayout} />
          <Route path="/catalog" component={App} />
          <Route path="/cart" component={CartResult} />
          <Route path="/product/:id([a-z0-9]{4,})" component={Product} />
          <Route path="/product/add" component={NewProduct} />
          <Route path="/:id(\d+)" render={(props) => {
            return <Clock routeProps={props} />;
          } } />
        </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// ReactDOM.render(
//     Routing,
//     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
