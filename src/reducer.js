
import * as actions from './action';

const initialState = {
  messageList: [
    'hello',
    'goodbye',
    'does it work',
  ]
}

export const colorReducer = (state = initialState, action) => {
  if (action.type === actions.CHANGE_COLOR) {
    return Object.assign({}, state, {
      color: action.color,
    })
  } else if (action.type === actions.NEW_MESSAGE) {
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

