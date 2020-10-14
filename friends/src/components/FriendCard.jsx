import React from 'react'
import {useHistory} from 'react-router-dom'
import FriendStats from './FriendStats'


const FriendCard = (props) => {
    const history = useHistory()
    const goToFriend = () => {
        history.push("/friends:id")
        //history.push(`/friends/${props.friend.id}`)
    }
    console.log("friend card props", props)
    return (
        <div onClick={goToFriend}>
            <h2>{props.friend.name}</h2>
            <FriendStats friends={props}/>
        </div>
    )
}

export default FriendCard
