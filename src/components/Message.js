import React from 'react';

class Message extends React.Component {

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderMessage() {
    return (
      <div className='message'>
        {/* e.g. recipient, body etc. */}
      </div>
    );
  }

  render() {
    if (this.props.message) {
      return this.renderMessage();
    } else {
      return this.renderError();
    }
  }
}

export default Message;