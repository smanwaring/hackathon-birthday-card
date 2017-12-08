import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import WhoForm from './components/WhoForm';
import WhatForm from './components/WhatForm';
import BackgroundForm from './components/BackgroundForm';
import EditCard from './components/EditCard';
import 'styles/index.css';

class Routes extends Component {
  state = {
    name: 'Peter',
    mainMessage: 'Happy Birthday',
    personalMessages: [{
      currentMessage: 'Sorry Stephanie ruined your birthday',
      position: 'translate(120px, 200px)'
    }]
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
        <Route exact path="/editCard" render={routeProps =>
          <EditCard {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
      </div>
    </Router>
    );
  }
}

export default Routes;
