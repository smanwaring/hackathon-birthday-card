import React, { Component } from 'react'
import Draggable from 'react-draggable'
import button from '../../styles/common/button.css';
import styles from '../../styles/editCard.css'

class FinalCard extends Component {

  render() {
    return(
      <div className={styles.cupcake}>
        <div className={styles.birthdayHeading}>
        <div className={styles.birthdayTextBox}>
            <h1>{this.props.mainMessage}</h1>
            <h1>{this.props.name}!</h1>
            <p>xoxo, your friends and family at XO Group</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FinalCard;
