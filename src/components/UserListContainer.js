import React from 'react';
import UserList from './UserList.js';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: true,
    }
  }

  render() {
    return <UserList { ...this.state } />
  }
}

export default UserListContainer;