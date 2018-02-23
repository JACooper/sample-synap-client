import React from 'react';
import Message from './Message.js';
import MessageDetail from './MessageDetail.js';
import './MessageList.css';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.detectScrollToBottom = this.detectScrollToBottom.bind(this);
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
        <button className='button' onClick={this.props.closeMessage}>Back</button>
        <MessageDetail message={message}/>
      </div>
    );
  }

  renderMessageList() {
    const count = this.props.loading ? 'Loading. . .' : this.props.loaded;
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message={message} openMessage={this.props.openMessage} />
    });

    return (
      <div className='message-list'>
        <p>{count}</p>
        <div className='messages' ref={list => { this.list = list }}>
          {messages}
        </div>
      </div>
    );
  }

  detectScrollToBottom(e) {
    // Only check if we're rendering the message list
    if (this.list && (this.props.detail === undefined || this.props.detail === null)) {
      // If the user has scrolled to the bottom of the list
      if (this.list.clientHeight + this.list.scrollTop >= this.list.scrollHeight) {
        this.props.loadMessages();
      }
    }
  }
  
  componentDidMount() {
    this.list.addEventListener('scroll', this.detectScrollToBottom, false);
  }

  componentWillUnmount() {
    this.list.removeEventListener('scroll', this.detectScrollToBottom, false);
  }

  render() {
    if (this.props.detail !== undefined && this.props.detail !== null) {
      return this.renderDetail();
    } else if (this.props.messages) {
      return this.renderMessageList();
    } else {
      return this.renderError();
    }
  }
}

export default MessageList;