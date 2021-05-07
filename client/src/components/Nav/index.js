import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  const logout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
  };
  const [store] = useStoreContext();

  return (
    <div>
      <header className="navbar">
        <div className="align-center">
          <a href="/">
            <img src="./imgs/Can_I_Eat_That_logo.png" className="logo" />
          </a>
          <h1> Your personal recipe finder</h1>
        </div>
      </header>

      <nav className="navbtns navbar align-center">
        <div className="navclick">
          <Link to="/" className="navclick">
            Home
          </Link>
        </div>
        <div className="navclick">
          <Link to="/FavoritesList" className="navclick">
            Favorites
          </Link>
        </div>
        <div className="navclick">
          <Link to="/login-signup" className="navclick">
            Login
          </Link>
        </div>
      </nav>
      {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
    </div>
  );
}

export default Nav;
