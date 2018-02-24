import React from 'react';
// import './UserDetail.css';

class UserDetail extends React.Component {
  renderError() {
    return <div>Could not render content.</div>;
  }

  renderDetail() {
    const company = this.props.user.company ? <p>Works at {this.props.user.company.name}</p> : null;
    return (
      <div className='user-detail'>
        <img className='detail-avatar' src={this.props.user.avatar} alt='' />
        <p>{this.props.user.name}</p>
        <p>{this.props.user.email}</p>
        {company}
      </div>
    );
  }

  render() {
    if (this.props.user) {
      return this.renderDetail();
    } else {
      return this.renderError();
    }
  }
}

export default UserDetail;