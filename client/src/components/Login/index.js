import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch("/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserUsername] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        }
        );
        setToken(token);
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/home" />;
    }


    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>

                    <button type="submit">
                        Submit</button>

                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}