import React from 'react';
import User from './User.js';
import UserDetail from './UserDetail.js';
import './UserList.css';

class UserList extends React.Component {

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderUserDetail() {
    const user = this.props.users[this.props.detail];
    return (
      <div className='user-list'>
        <button className='button' onClick={this.props.closeDetail}>Back</button>
        <UserDetail 
          user={user}
          clearDetail={this.props.clearDetail}
        />
      </div>
    );
  }

  renderUserList() {
    const users = this.props.users.length > 0 ? this.props.users.map((user, index) => {
      return (
        <User
          key={index}
          user={user}
          openDetail={() => { this.props.openDetail(index) }}
        />
      );
    }) : <p className='empty-list-message'>Select a message to view senders and recipients</p>;

    return <div className='user-list'>{users}</div>
  }

  render() {
    if (this.props.detail !== undefined && this.props.detail >= 0) {
      return this.renderUserDetail();
    } else if (this.props.summary) {
      return this.renderUserList();
    } else {
      return this.renderError();
    }
  }
}

export default UserList;