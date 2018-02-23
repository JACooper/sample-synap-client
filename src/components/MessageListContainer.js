import React from 'react';
import axios from 'axios';
import MessageList from './MessageList.js';

class MessageListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.loadMessages = this.loadMessages.bind(this);

    this.state = {
      loading: true,
      loaded: 0,
      messages: [],
    }
  }

  componentDidMount() {
    if (this.state.messages.length === 0) {
      this.loadMessages();
    }
  }

  render() {
    return <MessageList
        { ...this.state }
        openMessage={this.openMessage}
        closeMessage={this.closeMessage}
        loadMessages={this.loadMessages}
      />
  }

  openMessage(id) {
    this.setState({ detail: id });
  }

  closeMessage() {
    this.setState({ detail: null });
  }

  loadMessages() {
    this.setState({ loading: true });
    axios
      .get(`https://morning-falls-3769.herokuapp.com/api/messages?start=${this.state.loaded}&count=25`)
      .then((response) => {
        this.setState({
          loading: false,
          loaded: this.state.loaded + response.data.length,
          messages: this.state.messages.concat(response.data)
        });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
  }
}

export default MessageListContainer;