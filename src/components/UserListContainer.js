import React from 'react';
import UserList from 'UserList.js';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return <UserList props />
  }
}

export default UserListContainer;