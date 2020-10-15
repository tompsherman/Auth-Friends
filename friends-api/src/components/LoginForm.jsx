import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <h2>Please Log In:</h2>
            <form>
                <input placeholder="enter username" />
                <input placeholder= "enter password" />
                <button>log in</button>
            </form>
        </div>
    )
}

export default LoginForm
