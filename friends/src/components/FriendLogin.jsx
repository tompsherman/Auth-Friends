import React, {useState} from 'react'
import axios from 'axios'


const FriendLogin = () => {
    const [state, setState] = useState({
        credentials: {
            username: "",
            password: "",
        }
    })

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
        //axios call
        axios.post('http://localhost:8888', state)
            .then((response)=> {
                console.log("this is the response:", response)
            })
            .catch(error => console.log(`ERROR: ${error}`))
    }

    const changeHandler = (event) => {
        setState({
            credentials: {
                ...state,
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
                    value={state.username}
                    onChange={changeHandler}
                    placeholder='enter username'
                />
                <input
                    name='password'
                    type='password'
                    value={state.password}
                    onChange={changeHandler}
                    placeholder='enter password'
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default FriendLogin
