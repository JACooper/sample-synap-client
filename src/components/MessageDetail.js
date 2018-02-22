import React from 'react';

class MessageDetail extends React.Component {

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderMessageDetail() {
    const msg = this.props.message;
    return (
      <div className='message-detail'>
        <p>from: {msg.from}</p>
        <p>to: {msg.to}</p>
        <p>cc: {msg.cc}</p>
        <p>subject: {msg.subject}</p>
        <p>{msg.body}</p>
      </div>
    );
  }

  render() {
    if (this.props.message) {
      return this.renderMessageDetail();
    } else {
      return this.renderError();
    }
  }
}

export default MessageDetail;