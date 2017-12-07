import React, { Component } from 'react';
import 'normalize.css';
import 'styles/index.scss';

export default class WhatForm extends Component {

  componentDidMount() {
    this.props.updateState(
      {
        name: 'Stephanie'
      }
    );
  }

  render () {

    return (
      <div className='App'>
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.mainMessage}</p>
        </div>
      </div>
    );
  }
}