import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import socketIoClient from 'socket.io-client';

import { connect } from 'react-redux';
import { changeColor, newMessage, addMessage } from './action';

import Message from './message';
import MessageInput from './messageInput';

export class App extends Component {
  componentDidMount() {
  }

  messageInput = (message) => {
    this.props.dispatch(newMessage(message));
  }

  submitMessage = () => {
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Message messageList={this.props.messageList} />
        <MessageInput
          onChange={this.messageInput}
          value={this.props.message}
        />
        <button onClick={this.submitMessage}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  color: state.color,
  messageList: state.messageList,
  message: state.message,
});

export default connect(mapStateToProps)(App);
