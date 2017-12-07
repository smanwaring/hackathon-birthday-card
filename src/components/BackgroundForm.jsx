import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'styles/index.scss';

export default class BackgroundForm extends Component {
  render () {
    return (
      <div>
        <div>Pick a background:</div>
        <div className='backgroundWrapper'>
          <div className='bgk1'>sparkles</div>
          <div className='bgk2'>cats</div>
          <div className='bgk3'>white</div>
          <div className='bgk4'>blue</div>
          <div className='bgk5'>dogs</div>
          <div className='bgk6'>goldfish</div>
        </div>
        <Link to='/editCard'><button>Create My Card</button></Link>
      </div>
    );
  }
}