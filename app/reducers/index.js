/* @flow */

import { combineReducers } from 'redux';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import * as appReducer from './app';

// One should add all reducer files here. By this we combine all reducers
// to single reducer object and it's easier to attach to our app.
export default combineReducers(Object.assign({},
  appReducer,
  { routerReducer }
));
