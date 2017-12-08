import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import WhoForm from './components/WhoForm';
import WhatForm from './components/WhatForm';
import BackgroundForm from './components/BackgroundForm';
import EditCard from './components/EditCard';
import styles from '../styles/who.css';
import FromAllOfUs from './components/FromAllOfUs';

class Routes extends Component {
  state = {
    name: 'Peter',
    mainMessage: 'Happy Birthday',
    personalMessages: [{
      currentMessage: 'Sorry Stephanie ruined your birthday',
      // position: 'translate(120px, 200px)'
      position: { x: 220, y: 400 }
    }],
    imageMessages: [],
    background: ''
  }

  updateState = (stateToUpdate) => {
    this.setState(stateToUpdate)
  }

  render () {
    return (
    <Router>
      <div>
      <div>
        <Route exact path="/who" render={routeProps =>
          <WhoForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/what" render={routeProps =>
          <WhatForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/backgrounds" render={routeProps =>
          <BackgroundForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/editCard" render={routeProps =>
          <EditCard {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
      </div>
      </div>
    </Router>
    );
  }
}

export default Routes;
