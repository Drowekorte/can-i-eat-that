import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";
import PropTypes from "prop-types";
import "./style.css";

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="log-in">
      <h2>Please Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
