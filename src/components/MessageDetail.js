import React from 'react';
import './MessageDetail.css';

class MessageDetail extends React.Component {

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderMessageDetail() {
    const msg = this.props.message;
    const copied = msg.cc.reduce((list, user, index) => {
      if (index === 0) {
        return list = user;
      } else {
        return list += `, ${user}`;
      }
    });

    return (
      <div className='message-detail'>
        <p className='message-detail-subject'>{msg.subject}</p>
        <div className='message-detail-header'>
          <p>from: {msg.from}</p>
          <p>to: {msg.to}</p>
          <p>cc: {copied}</p>
        </div>
        <p className='message-detail-body'>{msg.body}</p>
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