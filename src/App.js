import React, { Component } from 'react';
import MessageListContainer from './components/MessageListContainer.js';
import UserListContainer from './components/UserListContainer.js';
import SearchBar from './components/SearchBar.js';
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
        <div className='content-container'>
          <SearchBar />
          <UserListContainer users={this.state.users} />
          <MessageListContainer getUsers={this.getUsers} clearUsers={this.clearUsers} />
        </div>
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
