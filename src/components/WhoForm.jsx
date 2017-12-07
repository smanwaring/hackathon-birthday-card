import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import 'styles/index.scss';

export default class WhoForm extends Component {

  handleButtonClick = () => {
    this.props.updateState({
      name: window.document.getElementById('who').value
    });

    //this.props.history.push('/what');
  }

  render () {
    return (
      <div>
        <div>Tell us who you are making this for:</div>
        <input id="who" type="text" placeholder="type name here"/>
        <div>
          <Link to="/what">
            <button onClick={this.handleButtonClick}>Next ></button>
          </Link>
        </div>
      </div>
    );
  }
}
