import React, { Component } from 'react'
import Draggable from 'react-draggable'
import AddMessage from './AddMessage'
import styles from '../../styles/editCard.css';

class EditCard extends Component {
  componentWillMount() {
    this.setState({
      currentMessage: '',
      position: ''
    });
  }

  handleButtonClick = () => {
    console.log(this.props.personalMessages)
    this.props.updateState({
      personalMessages: [ ...this.props.personalMessages, this.state ]
    })
  }

  recordPosition = (e) => {
    this.setState({position: e.target.style.transform});
  }

  updateCurrentMessage = (msg) => {
    this.setState({currentMessage: msg});
  }

  render() {
    const { personalMessages } = this.props;
    return(
      <div>
          <div className={styles.linkText}>Pass this card around to others: </div>
          <div className={styles.linkText}>Send the final card: </div>
        <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.mainMessage}</h1>
        </div>
        {personalMessages && personalMessages.map(message => (
          <div style={{transform: message.position}}>
            <div>{message.currentMessage}</div>
          </div>
        ))}
        <AddMessage finalizeState={this.handleButtonClick} updateMessage={this.updateCurrentMessage} />

        <Draggable
          onStop={this.recordPosition}
        >
          <div className="currentMessage">{this.state.currentMessage}</div>
        </Draggable>

      </div>
    )
  }
}

export default EditCard