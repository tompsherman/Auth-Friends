import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from "./components/FriendLogin"

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;