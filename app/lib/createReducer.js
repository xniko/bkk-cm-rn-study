/* @flow */

type BasicAction = { type: string, [key: string]: any }

// Helper function to create reducer.
export default function createReducer(initialState: any, handlers: any) {
  return function reducer(state: any = initialState, action: BasicAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
