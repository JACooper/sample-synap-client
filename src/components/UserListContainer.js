import React from 'react';
import axios from 'axios';
import UserList from './UserList.js';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.openDetail = this.openDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);

    this.state = {
      summary: true,
      users: []
    }
  }

  loadUsers() {
    if (this.props.users.length > 0) {
      const userRequests = this.props.users.map((user) => {
        return axios.get(`https://morning-falls-3769.herokuapp.com/api/people/${user}`);
      });

      Promise.all( userRequests )
        .then((results) => {
          const users = results.map((response) => { return response.data });
          this.setState({ users: users });
        });
    }
  }

  openDetail(id) {
    this.setState({ detail: id });
  }

  closeDetail() {
    this.setState({ detail: -1 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users.length === 0 && this.props.users.length >= 0) {
      this.loadUsers();
    } else if (prevProps.users.length >= 0 && this.props.users.length === 0) {
      this.setState({ users: [], detail: -1 });
    }
  }

  render() {
    return (
      <UserList
        { ...this.state }
        openDetail={this.openDetail}
        closeDetail={this.closeDetail}
      />
    );
  }

}

export default UserListContainer;