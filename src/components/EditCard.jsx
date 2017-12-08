import React, { Component } from 'react'
import Draggable from 'react-draggable'
import AddMessage from './AddMessage'
import AddImage from './AddImage'
import PreviewMessage from './PreviewMessage'
import styles from '../../styles/editCard.css'

class EditCard extends Component {
  componentWillMount() {
    this.setState({
      currentMessage: '',
      position: { x: 0, y: 219 },
      images: [],
      showPreview: true,
      inputWhat: 'text'
    });
  }

  handleButtonClick = () => {
    this.props.updateState({
      personalMessages: [ ...this.props.personalMessages, this.state ]
    })
    this.setState({
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

  updateImage = (img) => {
    this.setState({ images: [...this.state.images, img] })
  }

  renderInputOptions = () => {
    return (true) ? <AddMessage finalizeState={this.handleButtonClick} updateMessage={this.updateCurrentMessage} /> : <AddImage updateImage={this.updateImage} />
  }

  renderPreview = () => {
    return (this.state.showPreview) ? <PreviewMessage recordPosition={this.recordPosition} currentMessage={this.state.currentMessage} /> : null
  }

  render() {
    const { personalMessages } = this.props;
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
        {this.state.images.map(img => img)}
        {this.renderPreview()}
      </div>
    )
  }
}

export default EditCard
