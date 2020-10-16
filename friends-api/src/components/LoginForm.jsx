import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const LoginForm = (props) => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const history = useHistory()

    const changeHandler = (event) => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const loginPlease = (event) => {
        event.preventDefault()
        // /post/api/login
        axiosWithAuth()
            .post('/api/login', login)
            .then((response) => {
                window.localStorage.setItem('token', response.data.payload);
                history.push('/friends')})
            .catch(err => console.log(err))
            .finally()
        // push to Friends List
        
    }
    return (
        <div>
            <h2>Please Log In:</h2>
            <form onSubmit={loginPlease}>
                <input 
                    name="username" 
                    type="text" 
                    value={login.username} // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter username" 
                />
                <input 
                    name="password" 
                    type="password" 
                    value={login.password} // change to actual {target.value}
                    onChange={changeHandler} 
                    placeholder="enter password" 
                />
                <button onClick={loginPlease}>log in</button>
            </form>
        </div>
    )
}

export default LoginForm
