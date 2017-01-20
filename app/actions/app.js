/* @flow */

import * as types from './types';

// Simple action for settings text to our app.
export function setText(text: string) {
  return {
    type: types.SET_TEXT,
    text
  }
}
