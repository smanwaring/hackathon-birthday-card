import React, { Component } from 'react';
import styles from '../../styles/addImage.css'

export default class AddImage extends Component {
  addImage = (e) => {
    this.props.updateImage(e.target)
  }

  render () {
    return (
      <div>
        <div className={styles.imageWrapper}>
          <img onClick={this.addImage} src={require('../../assets/congrats.gif')} />
          <img onClick={this.addImage} src={require('../../assets/birthday_cupcake.png')} />
        </div>
      </div>
    );
  }
}
