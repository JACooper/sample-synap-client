import React from 'react';

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
    const users = this.props.users ? this.props.users.map((user) => {
      // return user summary - avatar and name. Remember to key
    }) : <p>Select a message to view senders and recipients</p>;

    return <div>{users}</div>
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