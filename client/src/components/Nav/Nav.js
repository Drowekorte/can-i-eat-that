import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  const [user] = useAuthState(auth);

  return (
    <nav className="navbar">
      <h1 className="eat" href="/">
        Can I Eat That?
      </h1>

      <h1 className="your"> Your personal recipe finder</h1>

      <nav className="">
        <div className="navclick">
          <Link to="/" className="navclick">
            Home
          </Link>
        </div>
      </nav>

      <nav className="">
        <div className="navclick">
          <Link to="/FavoritesList" className="navclick">
            Favorites
          </Link>
          <div></div>
        </div>
      </nav>
      <nav className="">
        <div className="navclick">
          {auth.currentUser ? (
            <Link>Logout</Link>
          ) : (
            <Link to="/login-signup" className="navclick">
              Login
            </Link>
          )}

          <div></div>
        </div>
      </nav>

      {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
    </nav>
  );
}

export default Nav;
