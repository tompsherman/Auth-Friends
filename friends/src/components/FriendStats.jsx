import React from 'react'

const FriendStats = (props) => {
   console.log("friend stats props.friends.friend: ", props.friends.friend)
    return (
        <div>
            <h4>{props.friends.friend.age}</h4>
            <h4>{props.friends.friend.email}</h4>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default FriendStats
