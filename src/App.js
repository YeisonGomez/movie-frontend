import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './scenes/Home/Home';
import Login from './scenes/Login/Login';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <hi>Cambio de Sebastian Danna</hi>
          <h1> Danna C 2</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
