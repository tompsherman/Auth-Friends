import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import './App.css'
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm'
import AddFriendsForm from './components/AddFriendsForm'
import FriendsCard from './components/FriendsCard';
import EditFriendForm from './components/EditFriendForm';

const App = () => {
  const history = useHistory()

  const routeToLogin = () => {
    history.push(`/friends`)
  }
  const routeToFriends = () => {
    history.push(`/friends`)
  }
  const routeToLogout = () => {
    window.localStorage.removeItem('token')
    history.push(`/`)
  }
  return (
   
    
        <>
          <div className="App">
            <h1> Welcome to State ...</h1>
            <button onClick={routeToLogin}>log in</button>
            <button onClick={routeToFriends}>see friends</button>
            <button onClick={routeToLogout}>log out</button>
          <br></br>
          </div>
        <Switch>
          <Route path="/login" component={LoginForm} />

          <PrivateRoute path="/edit-friends/:id" component={EditFriendForm} />
          
          <PrivateRoute path="/friends/:id" component={FriendsCard} />
           
          <PrivateRoute path ="/friends" component={AddFriendsForm} component={FriendsList}/>
            
          <Route path="/" />
        </Switch>
        </>
      
   
  );
};

export default App;