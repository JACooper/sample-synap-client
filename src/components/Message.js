import React from 'react';

class Message extends React.Component {

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderMessage() {
    const msg = this.props.message;
    return (
      <div className='message-summary' onClick={() => {this.props.openMessage(msg.id)}}>
        <p>from: {msg.from}</p>
        <p>subject: {msg.subject}</p>
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