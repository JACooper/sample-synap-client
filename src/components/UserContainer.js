import React from 'react';
import User from 'User.js';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }
  }

  render() {
    return <User props/>
  }
}

export default UserContainer;