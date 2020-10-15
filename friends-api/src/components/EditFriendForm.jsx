import React from 'react'
import { useHistory } from 'react-router-dom'

const EditFriendForm = () => {
    const history = useHistory()

    const finishEdit = () => {
        history.push(`/friends/:id`)
    }
    return (
        <div>
            <h3>Edit Friend Form:</h3>
            <form>
                <input placeholder="enter name" />
                <input placeholder="enter age" />
                <input placeholder="enter email" />
                <button onClick={finishEdit}>submit</button>
            </form>
        </div>
    )
}

export default EditFriendForm
