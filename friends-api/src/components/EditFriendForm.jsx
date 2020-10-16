import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const EditFriendForm = () => {
    const history = useHistory()
    const params = useParams()

    const [info, setInfo] = useState({
        name: "",
        age: "",
        email: ""
    })

    useEffect(()=> {
        axiosWithAuth()
        .get(`/api/friends/${params.id}`)
        .then(response => setInfo(response.data))
        .catch(error=> console.log(error))
    }, [])

    const changeHandler = (event) => {
        setInfo({...info, [event.target.name]: event.target.value})
    }

    const finishEdit = () => {
        // `/put/api/friends${id}`
        axiosWithAuth()
            .put(`/api/friends/${params.id}`, info)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        history.push(`/friends/`)
    }
    return (
        <div>
            <h3>Edit Friend Form:</h3>
            <form onSubmit={finishEdit}> 
                <input 
                    name="name" 
                    type="text" 
                    value={info.name} // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter name" 
                />
                <input 
                    name="age" 
                    type="text" 
                    value={info.age} // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter age" 
                />
                <input 
                    name="email" 
                    type="text" 
                    value={info.email} // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter email" 
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default EditFriendForm
