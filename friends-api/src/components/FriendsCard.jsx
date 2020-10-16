import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"

const FriendsCard = (props) => {
    const history = useHistory()

    // const routeToFriendCard = () => {
    //     console.log("FriencCard props: ", props)
    //     history.push(`/friends/${props.friend.id}`) // REMEMBER- ':id' will become ${id}
    //   }

    const editFriend = () => {
        // push to EditFriendsForm
        history.push(`/edit-friends/${props.friend.id}`) // REMEMBER ':id' will become '${id}
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
            <h4>{props.friend.name}</h4>
            
            {/* <button onClick={routeToFriendCard}>see Friends Card</button> */}


    <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
{/* `/put/api/friends/${id}` */}
            <button onClick={editFriend}>edit {props.friend.name}'s info</button>

{/* `/delete/api/friends/${id}` */}
            <button onClick={deleteFriend}>delete {props.friend.name}</button>
        </div>
    )
}

export default FriendsCard
