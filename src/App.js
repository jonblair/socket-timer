import React, { Component } from 'react';
import logo from './logo.svg';
import { subscribeToTimer } from './api';
import ReactMoment from 'react-moment';
import 'moment-timezone';

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => 
    this.setState({ 
     mytimestamp: timestamp, 
    }));

    this.state = {mytimestamp: 'no timestamp yet'};
  }

  render() {

  return (
    <div className="App">
      <p className="App-intro">
      Timer Value: {this.state.mytimestamp} <br/>
      Local Time: <ReactMoment format="hh:mm:ss A">{this.state.mytimestamp}</ReactMoment>
      </p>
    </div>
  );
  }
}

export default App;
