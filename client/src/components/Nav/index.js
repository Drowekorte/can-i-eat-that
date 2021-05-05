import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import './style.css';

function Nav(props) {
  const logout = async () => {
    await fetch("/api/logout", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        credentials: "include",
    });
       
}


  let menu;

  if (props.name === '') {
    menu = (
      <ul className="">
        <li className="">
          <Link to="/login" className="">Login</Link>
        </li>
        <li className="">
          <Link to="/signup" className="">Signup</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="">
        <li className="">
          <Link to="/login" className="" onClick={logout}>Logout</Link>
        </li>
      </ul>
    )

  }
  const [store] = useStoreContext();

  return (
    <nav className="navbar">
      <a className="eat" href="/">
        Can I Eat That?
      </a>
        Your personal recipe finder
      <nav className="">
        <div className="home">
          <Link to="/" className="home">Home</Link>
          <div>
          </div>
        </div>
      </nav>
      
      <nav className="">
        <div className="favorites">
          <Link to="/login" className="favorites">Favorites</Link>
          <div>

          </div>
        </div>
      </nav>
      <nav className="">
        <div className="login">
          <Link to="/login" className="login">Login</Link>
          <div>

          </div>
        </div>
      </nav>
      <nav className="">
        <div className="signup">
          <Link to="/signup" className="signup">Signup</Link>
          <div>

          </div>
        </div>
      </nav>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
