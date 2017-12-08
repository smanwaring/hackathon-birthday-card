import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../styles/who.css';
import button from '../../styles/common/button.css';


export default class BackgroundForm extends Component {

  constructor(props) {
    super(props);

    this.selectedClassName = styles['selected'];
    this.selectedClass = `.${this.selectedClassName}`;
  }

  selectAsBackground = (e) => {
    let selected = document.querySelectorAll(this.selectedClass);

    [].forEach.call(selected, function(el) {
      el.classList.remove(this.selectedClassName);
    });

    e.target.classList.add(this.selectedClassName)

    console.log(e.target);
  }

  setAsBackground = () => {
    const selectedBackgroundDiv = document.querySelector(this.selectedClass);
    let bgName = 'default'

    if(selectedBackgroundDiv) {
      bgName = selectedBackgroundDiv.getAttribute('data-bg');
    }

    this.props.updateState({background: bgName });
  }

  render () {
    return (
      <div className={styles.appWrapper}>
        <div>Pick a background:</div>
        <div className={styles['backgroundWrapper']}>
          <div data-bg="bgk1" onClick={this.selectAsBackground} className={styles['bgk1']}>sparkles</div>
          <div data-bg="bgk2" onClick={this.selectAsBackground} className={styles['bgk2']}>cats</div>
          <div data-bg="bgk3" onClick={this.selectAsBackground} className={styles['bgk3']}>white</div>
          <div data-bg="bgk4" onClick={this.selectAsBackground} className={styles['bgk4']}>blue</div>
          <div data-bg="bgk5" onClick={this.selectAsBackground} className={styles['bgk5']}>dogs</div>
          <div data-bg="bgk6" onClick={this.selectAsBackground} className={styles['bgk6']}>goldfish</div>
        </div>
        <Link className={button['fancy-button']} onClick={this.setAsBackground} to='/editCard'><button>Create My Card</button></Link>
      </div>
    );
  }
}
