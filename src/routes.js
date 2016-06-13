import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

function AppRouter() {
  return (
    <Router history={hashHistory}>
      <Route component={App} path='/'>
        <IndexRoute component={Home}/>
        <Route component={About} path='/about'/>
      </Route>
    </Router>
  );
}
export default AppRouter;