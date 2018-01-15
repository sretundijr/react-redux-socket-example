
import * as actions from './action';

const initialState = {
  messageList: [
    'hello',
    'goodbye',
  ]
}

export const messageReducer = (state = initialState, action) => {
  if (action.type === actions.NEW_MESSAGE) {
    return Object.assign({}, state, {
      message: action.message,
    })
  } else if (action.type === actions.ADD_MESSAGE) {
    return Object.assign({}, state, {
      message: '',
      messageList: [
        ...state.messageList,
        action.message,
      ]
    })
  }
  return state
};

