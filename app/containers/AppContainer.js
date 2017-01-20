/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import Home from './Home';


import {
  AppRegistry
} from 'react-native';

// Logger middleware. It gives us console logs about store changes
const loggetMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configurateStore(initialState) {
  const enchancer = compose(
    applyMiddleware(
      loggetMiddleware,
      thunkMiddleware
    )
  )

  return createStore(reducer, initialState, enchancer);
}

// Create redux store.
const store = configurateStore({});

// Define application container. Holds everything from our app.
class AppContainer extends Component {

  render() {

    return  (
      // Connect redux to our app with Provider.
      <Provider store={store}>
        <Router>
          <Route name="home" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;
