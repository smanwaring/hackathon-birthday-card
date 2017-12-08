import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../styles/who.css';
import button from '../../styles/common/button.css';

export default class BackgroundForm extends Component {
  render () {
    return (
      <div className={styles.appWrapper}>
        <div>Pick a background:</div>
        <div className='backgroundWrapper'>
          <div className='bgk1'>sparkles</div>
          <div className='bgk2'>cats</div>
          <div className='bgk3'>white</div>
          <div className='bgk4'>blue</div>
          <div className='bgk5'>dogs</div>
          <div className='bgk6'>goldfish</div>
        </div>
        <Link to='/editCard'><button className={button['fancy-button']}>Create</button></Link>
      </div>
    );
  }
}