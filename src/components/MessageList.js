import React from 'react';
import Message from 'Message.js';

class MessageList extends React.Component {

  renderLoading() {
    return <div>Loading. . .</div>;
  }

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderMessageList() {
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message/>
    });
    return <div className='message-list'>{messages}</div>
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.messages) {
      return this.renderMessageList();
    } else {
      return this.renderError();
    }
  }
}

export default MessageList;