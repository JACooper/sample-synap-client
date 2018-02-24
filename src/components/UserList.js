import React from 'react';
import User from './User.js';
import './UserList.css';

class UserList extends React.Component {

  renderError() {
    return <div>Could not render content.</div>;
  }

  // Problem: Only want to request users once, then display summaries.
  // That means: get users here. Make user summaries have loading state.
  // When a user is clicked on, display that detail instead of a summary (without other requests).
  // When they go back, display summary without reloading.

  // So. On message select, start user load. Display loading summaries. As user requests resolve, pass in data.

  // Renders avatar, name, description, email address
  renderUserDetail() {
    return <div>User detail</div>
  }

  renderUserList() {
    let userKey = 0;
    const users = this.props.users.length > 0 ? this.props.users.map((user) => {
      return <User key={userKey++} user={user} />
    }) : <p className='empty-list-message'>Select a message to view senders and recipients</p>;

    return <div className='user-list'>{users}</div>
  }

  render() {
    if (this.props.detail) {
      return this.renderUserDetail();
    } else if (this.props.summary) {
      return this.renderUserList();
    } else {
      return this.renderError();
    }
  }
}

export default UserList;