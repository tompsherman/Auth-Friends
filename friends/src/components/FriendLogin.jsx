import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const FriendLogin = () => {
    const [login, setLogin] = useState({
        credentials: {
            username: "",
            password: "",
        }
    })

    const history = useHistory()

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(login.credentials)
        //axios call
        axiosWithAuth()
            .post('/api/login', login.credentials)
            .then((response)=> {
                console.log(response.data)
                window.localStorage.setItem("token", response.data.payload);
                history.push("/friends")
            })
            .catch(error => console.log(`ERROR: ${error}`))
    }

    const changeHandler = (event) => {
        setLogin({
            credentials: {
                ...login.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    name='username'
                    type='text'
                    value={login.username}
                    onChange={changeHandler}
                    placeholder='enter username'
                />
                <input
                    name='password'
                    type='password'
                    value={login.password}
                    onChange={changeHandler}
                    placeholder='enter password'
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default FriendLogin
