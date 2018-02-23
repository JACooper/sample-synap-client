import React, { Component } from 'react';
import logo from './logo.svg';
import MessageListContainer from './components/MessageListContainer.js';
import UserListContainer from './components/UserListContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListContainer />
        <MessageListContainer />
      </div>
    );
  }
}

export default App;
