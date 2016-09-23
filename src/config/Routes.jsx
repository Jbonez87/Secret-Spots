import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import Dashboard from '../utils/Auth.js';

class Routes extends Component {
  render() {
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
      </Route>
    </Router>
  }
}