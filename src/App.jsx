import React from 'react';
import './style.css';
import Login from './Login';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/about" component={Login} />
          <Route path="/contact" component={Login} />
          <Route path="/signin" component={Login} />
          <Route path="/sign-up" component={Login} />
        </Switch>
      </Router>
      
    </div>
  );
}
/*
https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m
*/