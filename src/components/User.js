import React from 'react';
import placeholder from '../placeholder.png'
import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: placeholder,
    }
  }

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderUser() {
    return (
      <div className='user-summary' onClick={this.props.openDetail}>
        <img className='user-summary-avatar' src={this.state.avatar} alt='' />
        <p className='user-summary-name'>{this.props.user.name}</p>
      </div>
    );
  }

  componentWillMount() {
    const urlSrc = this.props.user.avatar;
    this.avi = new Image();

    this.avi.onload = () => {
      if (this.state !== undefined) {
        // Update state so image component will use new src
        this.setState({ avatar: this.props.user.avatar });
      }
    }

    // Make request for resource
    this.avi.src = urlSrc;
  }

  componentWillUnmount() {
    // Prevent calling setState on unmounted component (i.e. if userlist is closed before images load)
    this.avi.onload = () => {};
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