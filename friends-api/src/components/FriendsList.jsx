import React from 'react'
import {useHistory} from "react-router-dom"
import FriendsCard from './FriendsCard'

const FriendsList = () => {
    const history = useHistory()
    const routeToFriendCard = () => {
        history.push(`/friends/:id`)
      }
    return (
        <div>
            <h2> this is the friends list</h2>
            {/* get/api/friends */}
            <button onClick={routeToFriendCard}>see Friends Card</button>
        </div>
    )
}

export default FriendsList
