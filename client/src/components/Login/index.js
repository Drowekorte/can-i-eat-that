import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import "./style.css";

async function loginUser(credentials) {
    return fetch("/api/user/login", {
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
        // setToken(token);
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/home" />;
    }


    return (
        <h1 className="log-in">
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

                    <button type="submit" className="submit">
                        Submit</button>

                </div>
            </form>
        </div>
        </h1>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}