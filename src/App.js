import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import socketIoClient from 'socket.io-client';

import { connect } from 'react-redux';
import { changeColor } from './action';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color: '',
  //     endpoint: 'http://localhost:8000/',
  //   }
  // }
  componentDidMount() {
    const socket = socketIoClient('http://localhost:8000/');
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })
  }
  send = () => {
    const socket = socketIoClient('http://localhost:8000/');
    socket.emit('change color', this.props.color);
  }
  setColor = (color) => {
    // this.setState({ color })
    this.props.dispatch(changeColor(color));
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  color: state.color,
});

export default connect(mapStateToProps)(App);
