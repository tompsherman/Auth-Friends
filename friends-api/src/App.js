import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom'
import './App.css'
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm'
import AddFriendsForm from './components/AddFriendsForm'
import FriendsCard from './components/FriendsCard';
import EditFriendForm from './components/EditFriendForm';

const App = () => {
  const history = useHistory()

  const routeToLogin = () => {
    history.push(`/login`)
  }
  const routeToFriends = () => {
    history.push(`/friends`)
  }
  return (
   
    
        <>
          <div className="App">
            <h1> Welcome to State ...</h1>
            <button onClick={routeToLogin}>log in</button>
            <button onClick={routeToFriends}>see friends</button>
          <br></br>
          </div>
        <Switch>
           <Route path="/login"> 
            <LoginForm />
          </Route>
          <Route path="/edit-friends/:id" >
            <EditFriendForm />
          </Route>
          <Route path="/friends/:id">
            <FriendsCard />
          </Route>
            <Route path ="/friends">
              <AddFriendsForm />
              <br></br>
              <FriendsList />
            </Route>
            <Route path="/">
  
            </Route>
        </Switch>
        </>
      
   
  );
};

export default App;