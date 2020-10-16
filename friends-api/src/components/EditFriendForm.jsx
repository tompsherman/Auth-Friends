import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const EditFriendForm = () => {
    const history = useHistory()

    useEffect(()=> {
        // axios
        // .get(url/:id)
        // .then(response => console.log(response))
        // .catch(error=> console.log(error))
    }, [])

    const changeHandler = (event) => {

    }

    const finishEdit = () => {
        history.push(`/friends/:id`)
    }
    return (
        <div>
            <h3>Edit Friend Form:</h3>
            <form>
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
                <button onClick={finishEdit}>submit</button>
            </form>
        </div>
    )
}

export default EditFriendForm
