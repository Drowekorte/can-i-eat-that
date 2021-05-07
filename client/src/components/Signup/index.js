import React, { useState } from 'react';

import { Redirect } from 'react-router'

import PropTypes from 'prop-types';

async function signupUser(credentials) {
    return fetch("/api/user/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())

}



export default function Signup({ setToken }) {
    const [name, setUserName] = useState();
    const [email, setUserEmail] = useState();
    const [username, setUserUsername] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signupUser(
            {
                name,
                email,
                username,
                password
            }
        );

        // setToken(token);

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="log-in">
            <h1>Please Signup</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setUserEmail(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserUsername(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    <p>Password</p>
                    <input type="current-password" onChange={e => setPassword(e.target.value)} />
                </label>
                </div>
                <div>
                    <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
}