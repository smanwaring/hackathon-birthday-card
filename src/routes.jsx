import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import WhoForm from './components/WhoForm';
import WhatForm from './components/WhatForm';
import BackgroundForm from './components/BackgroundForm';
import 'styles/index.scss';

class Routes extends Component {
  state = {
    name: 'Peter',
    mainMessage: 'Happy Birthday',
    personalMessages: []
  }

  updateState = (stateToUpdate) => {
    this.setState(stateToUpdate)
  }

  render () {
    return (
    <Router>
      <div className="appWrapper">
        <Route exact path="/who" render={routeProps =>
          <WhoForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/what" render={routeProps =>
          <WhatForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/backgrounds" render={routeProps =>
          <BackgroundForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
      </div>
    </Router>
    );
  }
}

export default Routes;
