import React, { Component } from 'react'
import Draggable from 'react-draggable'
import AddMessage from './AddMessage'
import AddImage from './AddImage'
import PreviewMessage from './PreviewMessage'
import PreviewImage from './PreviewImage'
import styles from '../../styles/editCard.css'

class EditCard extends Component {
  componentWillMount() {
    this.setState({
      currentMessage: '',
      position: { x: 0, y: 219 },
      showPreview: true,
      inputWhat: 'text'
    });
  }

  handleButtonClick = () => {
    const message = { currentMessage: this.state.currentMessage, position: this.state.position }
    this.props.updateState({
      personalMessages: [ ...this.props.personalMessages, message ]
    })
    this.setState({
      currentMessage: '',
      showPreview: false,
    })
    document.getElementById('friendMessage').value = ''
  }

  recordPosition = (e) => {
    const { x, y } = e
    this.setState({ position: { x, y } });
  }

  updateCurrentMessage = (msg) => {
    this.setState({ currentMessage: msg, showPreview: true });
  }

  finalizeImages = (images) => {
    this.props.updateState({
      imageMessages: [ ...this.props.imageMessages, ...images ]
    })
  }

  toggleInput = () => {
    const what = (this.state.inputWhat === 'text')? 'image' : 'text'
    this.setState({ inputWhat: what  })
  }

  renderInputOptions = () => {
    return (this.state.inputWhat == 'text') ? <AddMessage finalizeState={this.handleButtonClick} updateMessage={this.updateCurrentMessage} /> : <AddImage updateImage={this.updateImage} finalizeImages={this.finalizeImages} />
  }

  renderPreview = () => {
    return (this.state.showPreview) ? <PreviewMessage recordPosition={this.recordPosition} currentMessage={this.state.currentMessage} /> : null
  }

  render() {
    const { personalMessages, imageMessages } = this.props;
    return(
      <div>
        <div>
          <div>Link to Add Message</div>
          <div>Link to Send to Peter</div>
        </div>
        <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.mainMessage}</h1>
        </div>

        <button onClick={this.toggleInput}>Toggle Input</button>
        {this.renderInputOptions()}

        {personalMessages && personalMessages.map(message => (
          <div className={styles.positioned} key={Math.round(Math.random() * 100000)}>
            <Draggable
              defaultPosition={{x: 0, y: 0}}
              position={message.position}
              disabled={true}
            >
              <div>{message.currentMessage}</div>
            </Draggable>
          </div>
        ))}
        {imageMessages.map(img => (
          <div className={styles.positioned} key={Math.round(Math.random() * 100000)}>
          <Draggable
            defaultPosition={{x: 0, y: 0}}
            position={img.position}
            disabled={true}
            >
            <img className={styles.imageMessages} src={img.src} />
          </Draggable>
          </div>
        ))}
        {this.renderPreview()}
      </div>
    )
  }
}

export default EditCard
