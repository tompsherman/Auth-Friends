import React from 'react'
import { useHistory } from 'react-router-dom'

const FriendsCard = () => {
    const history = useHistory()

    const editFriend = () => {
        history.push(`/edit-friends/:id`) // REMEMBER ':id' will become '${id}
    }

    const deleteFriend = () => {
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
