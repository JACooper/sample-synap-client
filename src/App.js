import React, { Component } from 'react';
import logo from './logo.svg';
import MessageListContainer from './components/MessageListContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Some content</p>
        <MessageListContainer />
      </div>
    );
  }
}

export default App;
