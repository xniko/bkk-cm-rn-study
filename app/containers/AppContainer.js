/* @flow */
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

// Import Router and Scene from react-native-router-flux...
import { Router, Scene } from 'react-native-router-flux';
// and connect router with redux
const RouterWithRedux = connect()(Router);

// Import views (you could think them as pages)
import Home from './Home';
import About from './About';


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

  // Every react component must have render function!
  render() {

    return  (
      // Connect redux to our app with Provider.
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="home" name="home" component={Home} title="Home" />
          <Scene key="about" name="about" component={About} title="About" />
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default AppContainer;
