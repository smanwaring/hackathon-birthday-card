import React, { Component } from 'react';
import 'normalize.css';
import 'styles/index.scss';

export default class WhoForm extends Component {

  componentDidMount() {
    this.props.updateState(
      {
        name: 'Stephanie'
      }
    );
  }

  render () {
    return (
      <div>
        <div>Tell us who you are making this for:</div>
        <input id="who" type="text" placeholder="type name here"/>
      </div>
    );
  }
}
