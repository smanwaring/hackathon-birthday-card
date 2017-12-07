import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/index.scss';

export default class WhatForm extends Component {

  handleButtonClick = () => {
    this.props.updateState({
      mainMessage: document.getElementById('celebration').value
    })
  }

  render () {
    return (
      <div>
        <div>What are we celebrating:</div>
        <select name="celebration" id="celebration">
          <option value="Birthday">Birthday</option>
          <option value="Get Well">Get Well</option>
          <option value="Congratulations">Congratulations</option>
          <option value="Condolences">Condolences</option>
        </select>
        <div>
          <Link to="/backgrounds">
            <button onClick={this.handleButtonClick}>Next ></button>
          </Link>
        </div>
      </div>
    );
  }
}