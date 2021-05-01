import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";

function Nav(props) {
  const logout = async () => {
    await fetch("http://localhost:3000/api/logout", {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Can I Eat That? | Your personal recipe finder
      </a>
      <nav className="">
        <div className="">
          <Link to="/" className="">Home</Link>
          <div>

          </div>
        </div>
      </nav>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
