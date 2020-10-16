import React from 'react'
import { useHistory } from 'react-router-dom'

const AddFriendsForm = () => {
    const history = useHistory()

    const changeHandler = (event) => {

    }

    const addNewFriend = () => {
        // `/post/api/friends`
        // axios
        // .post(url, new_friend)
        // .then(response => console.log(response))
        // .catch(err => console.log(err))
        // push to friends list
        history.push(`/friends`)
    }

    return (
        <div>
            <h3>Add New Friend Form:</h3>
            <form onSubmit={addNewFriend}>
                <input 
                    name="name" 
                    type="text" 
                    value="target.value" // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter name" 
                />
                <input 
                    name="age" 
                    type="text" 
                    value="target.value" // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter age" 
                />
                <input 
                    name="email" 
                    type="text" 
                    value="target.value" // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter email" 
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddFriendsForm
