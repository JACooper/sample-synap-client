import React from 'react';
import UserList from './UserList.js';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: true,
    }
  }
  // on update, request user information
  render() {
    return <UserList { ...this.state } users={this.props.users} />
  }
}

export default UserListContainer;