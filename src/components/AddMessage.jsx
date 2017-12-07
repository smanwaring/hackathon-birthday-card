import React, { Component } from 'react';
import 'styles/index.scss';

export default class AddMessage extends Component {
  createMessage = () => {
    let msg = document.getElementById('friendMessage').value;
    this.props.updateMessage(msg);
  }

  render () {
    return (
      <div>
        <textarea id="friendMessage" className="textBox" placeholder="Your message here"></textarea>
        <button onClick={this.createMessage}>Preview your message</button>
        <button onClick={this.props.finalizeState}>Done</button>
      </div>
    );
  }
}