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
      <div className='summary'>
        <img className='summary-avatar' src={this.state.avatar} alt='' />
        <p className='summary-name'>{this.props.user.name}</p>
      </div>
    );
  }

  componentWillMount() {
    const urlSrc = this.props.user.avatar;
    const avi = new Image();

    avi.onload = () => {
      // Update state so image component will use new src
      this.setState({ avatar: this.props.user.avatar });
    }

    // Make request for resource
    avi.src = urlSrc;
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