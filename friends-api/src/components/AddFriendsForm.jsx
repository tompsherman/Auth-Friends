import React from 'react'
import { useHistory } from 'react-router-dom'

const AddFriendsForm = () => {
    const history = useHistory()

    const addNewFriend = () => {
        // `/post/api/friends`

        // push to friends list
        history.push(`/friends`)
    }

    return (
        <div>
            <h3>Add New Friend Form:</h3>
            <form onSubmit={addNewFriend}>
                <input placeholder="enter name" />
                <input placeholder="enter age" />
                <input placeholder="enter email" />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddFriendsForm
