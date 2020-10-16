import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import FriendsCard from './FriendsCard'
import axiosWithAuth from '../utils/axiosWithAuth'
import AddFriendsForm from './AddFriendsForm'

const FriendsList = (props) => {
    const [friendsList, setFriendsList] = useState([])
    const history = useHistory()

    useEffect(() => {
       // get/api/friends
       axiosWithAuth()
        .get('/api/friends')
        .then(response => setFriendsList(response.data))
        .catch(error => console.log(error))
    }, [])

    console.log("friendsList: ", friendsList)

    return (
        <div>

            <AddFriendsForm />

            <h2> this is the friends list</h2>
           
            {
                friendsList.map(item => (
                <FriendsCard key={item.id} friend={item} />
                ))
            }

        </div>
    )
}

export default FriendsList
