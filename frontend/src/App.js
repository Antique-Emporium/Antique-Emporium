import './App.css';
import React, { Component, Suspense } from 'react';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './components/Upload/Upload';
import Login from './components/Login/Login';
// import NavBar from './components/NavBar/Navbar';
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/upload" component={Upload} />
        </Switch>
    </Router>
    </div>
  );
}
export default App;
