import React, { Component } from 'react';
import MessageListContainer from './components/MessageListContainer.js';
import UserListContainer from './components/UserListContainer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);

    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div className="App">
        <UserListContainer users={this.state.users} />
        <MessageListContainer getUsers={this.getUsers} clearUsers={this.clearUsers} />
      </div>
    );
  }

  getUsers(users) {
    this.setState({ users: users });
  }

  clearUsers() {
    this.setState({ users: [] });
  }
}

export default App;
