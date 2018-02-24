import React from 'react';
import axios from 'axios';
import UserList from './UserList.js';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: true,
      users: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users.length === 0 && this.props.users.length >= 0) {
      this.loadUsers();
    } else if (prevProps.users.length >= 0 && this.props.users.length === 0) {
      this.setState({ users: [] });
    }
  }

  render() {
    return <UserList { ...this.state } />
  }

  loadUsers() {
    if (this.props.users.length > 0) {
      const userRequests = this.props.users.map((user) => {
        return axios.get(`https://morning-falls-3769.herokuapp.com/api/people/${user}`);
          // .then((response) => {
          //   return response.data;
          // })
          // .catch((error) => {
          //   return ({ error: 'Could not load user details' });
          // });
      });

      Promise.all( userRequests )
        .then((results) => {
          const users = results.map((response) => { return response.data });
          this.setState({ users: users });
        });
    }
  }
}

export default UserListContainer;