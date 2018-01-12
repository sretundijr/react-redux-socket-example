
import * as actions from './action';

export const colorReducer = (state = 'yellow', action) => {
  if (action.type === actions.CHANGE_COLOR) {
    return Object.assign({}, state, {
      color: action.color,
    })
  }
  return state
};

