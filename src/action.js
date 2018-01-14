
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const changeColor = color => ({
  type: CHANGE_COLOR,
  color,
});

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const newMessage = message => ({
  type: NEW_MESSAGE,
  message,
})

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE,
  message,
})

