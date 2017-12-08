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
      <div className={styles.cupcake}>
      <div className={styles.links}>
        <div className={styles.linkText}>Pass this card around to others:<span className={styles.linksBlue}>bit.ly/Klu/f138 </span></div>
        <div className={styles.linkText}>Send the final card:<span className={styles.linksBlue}>xoxo.Happy-Birthday-Peter/ </span></div>
      </div>
        <div className={styles.birthdayHeading}>
          <h1>{this.props.mainMessage}</h1>
          <h1>{this.props.name}!</h1>
          <p>xoxo, your friends and family at XO Group</p>
        </div>
        {personalMessages && personalMessages.map(message => (
          <div key={message} style={{transform: message.position}}>
            <div>{message.currentMessage}</div>
          </div>
        ))}
        <AddMessage finalizeState={this.handleButtonClick} updateMessage={this.updateCurrentMessage} />
        <Draggable onStop={this.recordPosition}>
          <div className="currentMessage">{this.state.currentMessage}</div>
        </Draggable>
      </div>
    )
  }
}

export default EditCard
