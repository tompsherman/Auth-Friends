import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import FriendLogin from "./components/FriendLogin"
import FriendList from "./components/FriendList"
import FriendCard from './components/FriendCard'
import FriendStat from "./components/FriendStats"

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/friends">See Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/friends/:id" component={FriendStat}/>
          <Route path= "/friends" component={FriendList} />
          <Route path= "/login" component={FriendLogin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;