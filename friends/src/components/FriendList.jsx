import React, {useState, useEffect} from 'react'
import FriendCard from "../components/FriendCard"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const FriendList = (props) => {
    const [friendList, setFriendList] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        axiosWithAuth()
        .get('/api/friends')
        .then(response => setFriendList(response.data))
        .catch(error=>console.log(error))
    }, [])
    
    console.log(friendList)
        return (
        <div>
            this is the list of friends.
            
            {
               friendList.map((friend)=>(
                   <FriendCard key={friend.id} friend= {friend} />
               )) 
            }
        </div>
    )
}

export default FriendList
