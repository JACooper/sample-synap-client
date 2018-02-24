import React from 'react';
import './User.css';

class User extends React.Component {
  renderError() {
    return <div>Could not render content.</div>;
  }

  renderUser() {
    return (
      <div className='summary'>
        <img className='summary-avatar' src={this.props.user.avatar} alt='' />
        <p className='summary-name'>{this.props.user.name}</p>
      </div>
    );
  }

  render() {
    if (this.props.user) {
      return this.renderUser();
    } else {
      return this.renderError();
    }
  }
}

export default User;