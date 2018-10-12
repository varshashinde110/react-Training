import React, { Component } from 'react';
import styles from './App.css';
import SimpleCard from './Container/';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className = {styles.App}>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
          <Route exact path="/login" component={SimpleCard}/>
          <Route exact path="/signup" component={SimpleCard}/>
      </div>
      </Router>
    );
  }
}

export default App;
