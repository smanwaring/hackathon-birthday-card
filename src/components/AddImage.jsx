import React, { Component } from 'react';
import PreviewImage from './PreviewImage'
import styles from '../../styles/addImage.css'

export default class AddImage extends Component {
  state = {
    images: []
  }

  addImage = (e) => {
    this.setState({
      images: [...this.state.images, <PreviewImage src={e.target.src} />]
    })
  }

  componentWillUnmount = () => {
    this.props.finalizeImages(this.state.images)
  }

  render () {
    return (
      <div className={styles.imageWrapper}>
        <div>
          <img onClick={this.addImage} src={require('../../assets/congrats.gif')} />
          <img onClick={this.addImage} src={require('../../assets/birthday_cupcake.png')} />
        </div>
        {this.state.images.map(img => img)}
      </div>
    );
  }
}
