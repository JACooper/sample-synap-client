import React from 'react';
import Message from './Message.js';
import MessageDetail from './MessageDetail.js';

class MessageList extends React.Component {
  renderLoading() {
    return <div>Loading. . .</div>;
  }

  renderError() {
    return <div>Could not render content.</div>;
  }

  renderDetail() {
    const message = this.props.messages.find((msg) => {
      return msg.id === this.props.detail;
    });
    return (
      <div className='message-list'>
        <MessageDetail message={message}/>
      </div>
    );
  }

  renderMessageList() {
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message={message} openMessage={this.props.openMessage} />
    });
    return <div className='message-list'>{messages}</div>
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.detail !== undefined && this.props.detail !== null) {
      return this.renderDetail();
    } else if (this.props.messages) {
      return this.renderMessageList();
    } else {
      return this.renderError();
    }
  }
}

export default MessageList;