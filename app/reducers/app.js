/* @flow */

import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

// This is really simple reducer.
export const text = createReducer('This is default text', {
  [types.SET_TEXT](state, action) {
    return action.text;
  }
});
