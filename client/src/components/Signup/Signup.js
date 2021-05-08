import React, { useState } from "react";
import { useHistory } from "react";
import { auth } from "../../config/firebase";

export default function Signup() {
  const [email, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="log-in">
      <h2>Don't have an account? Signup!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Email</p>
            <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <p>Password</p>
            <input
              type="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
