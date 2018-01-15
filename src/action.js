
import socketIoClient from 'socket.io-client';

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

export const sendMessage = (message) => {
  const socket = socketIoClient('http://localhost:8000/');
  socket.emit('message', message);
}

export const getMessage = () => dispatch => {
  const socket = socketIoClient('http://localhost:8000/');
  socket.on('receive message', (message) => {
    dispatch(addMessage(message));
  })
}

