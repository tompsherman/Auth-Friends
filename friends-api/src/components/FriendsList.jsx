import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import FriendsCard from './FriendsCard'
import axios from 'axios'
import AddFriendsForm from './AddFriendsForm'

const FriendsList = (props) => {
    const history = useHistory()

    useEffect(() => {
       // get/api/friends
    //    axios
    //     .get(url)
    //     .then(response => console.log(error))
    //     .catch(err => console.log(error))
    }, [])

    const routeToFriendCard = () => {
        history.push(`/friends/:id`) // REMEMBER- ':id' will become ${id}
      }
    return (
        <div>

            <AddFriendsForm />

            <h2> this is the friends list</h2>

            {/* {
                state.map(item => (
                <FriendsCard key={item.id} friend={item} />
                ))
            } */}

            <button onClick={routeToFriendCard}>see Friends Card</button>

        </div>
    )
}

export default FriendsList
