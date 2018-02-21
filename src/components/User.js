import React from 'react';

class User extends React.Component {

  renderLoading() {
    return <div>Loading. . .</div>;
  }

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderUser() {
    return <div>Content</div>
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.render) {
      return this.renderUser();
    } else {
      return this.renderError();
    }
  }
}

export default User;