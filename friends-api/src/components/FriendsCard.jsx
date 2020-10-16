import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"

const FriendsCard = () => {
    const history = useHistory()

    const editFriend = () => {
        // `/put/api/friends${id}`
        // axios
        //     .put(url, edited_friend)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
        // push to FriendsCard
        history.push(`/edit-friends/:id`) // REMEMBER ':id' will become '${id}
    }

    const deleteFriend = () => {
        // `/delete/api/friends${id}`
        // axios
        //     .delete(url)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
        // push to FriendsList
        history.push(`/friends`)
    }

    return (
        <div>
            <h4>this is the friends name</h4>
            <p>with their age</p>
            <p>and their email address</p>
{/* `/put/api/friends/${id}` */}
            <button onClick={editFriend}>edit friend info</button>

{/* `/delete/api/friends/${id}` */}
            <button onClick={deleteFriend}>delete friend</button>
        </div>
    )
}

export default FriendsCard
