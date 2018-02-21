import React from 'react';
import axios from 'axios';
import MessageList from 'MessageList.js';

class MessageListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    axios
      .get('https://morning-falls-3769.herokuapp.com/api/messages?start=0&count=25')
      .then((response) => {
        this.setState({ loading: false, messages: response.data });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
  }

  render() {
    return <MessageList { ...this.state } />
  }
}

export default MessageListContainer;