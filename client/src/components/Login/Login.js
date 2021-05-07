import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { auth } from "../../config/firebase";
import "./style.css";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <h1 className="log-in">
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </h1>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
