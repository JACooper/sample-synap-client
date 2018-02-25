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
    return (
      <div className='message-list'>
        <p className='error-text'>Could not load messages.</p>
        <button onClick={this.props.loadMessages}>Retry</button>
      </div>
    );
  }

  renderDetail() {
    const message = this.props.messages.find((msg) => {
      return msg.id === this.props.detail;
    });
    return (
      <div className='message-list'>
        <div className='back-bar'>
          <button id='message-detail-back' className='back-button' onClick={this.props.closeMessage}/>
          <label htmlFor='message-detail-back'>Return to messages</label>
        </div>
        <MessageDetail message={message}/>
      </div>
    );
  }

  renderMessageList() {
    const count = this.props.loading ? 'Loading. . .' : `${this.props.loaded} messages loaded`;
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message={message} openMessage={this.props.openMessage} />
    });

    return (
      <div className='message-list'>
        <p className='inbox-status'>{count}</p>
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
  
  componentWillReceiveProps(nextProps) {
    // Before entering detail view, save scroll position to use later
    if ((this.props.detail === undefined || this.props.detail === null)
      && (nextProps.detail !== undefined && nextProps.detail !== null)) {
        this.setState({ scroll: this.list.scrollTop });
      }
  }

  componentDidUpdate(prevProps, prevState) {
    // If we were in detail view and are now in list, re-attach scroll listener
    // The listener is automatically removed when the ref unmounts, since it only exists in renderMessageList()
    // Make sure to not try to restore scroll if coming from error state, as this.state will be undefined
    if (prevProps.detail !== undefined && prevProps.detail !== null && this.props.detail === null) {
      this.list.addEventListener('scroll', this.detectScrollToBottom, false);
      this.list.scrollTop = this.state.scroll;
    } else if (prevProps.error !== undefined && prevProps.error !== null && this.props.error === null) {
      this.list.addEventListener('scroll', this.detectScrollToBottom, false);
    }
  }

  componentDidMount() {
    if ((this.props.error === undefined || this.props.error === null)
      && (this.props.detail === undefined || this.props.detail === null)) {
      this.list.addEventListener('scroll', this.detectScrollToBottom, false);
    }
  }

  componentWillUnmount() {
    if ((this.props.error === undefined || this.props.error === null)
      && (this.props.detail === undefined || this.props.detail === null)) {
      this.list.removeEventListener('scroll', this.detectScrollToBottom, false);
    }
  }

  render() {
    if (this.props.error) {
      return this.renderError();
    } else if (this.props.detail !== undefined && this.props.detail !== null) {
      return this.renderDetail();
    } else {
      return this.renderMessageList();
    }
  }
}

export default MessageList;