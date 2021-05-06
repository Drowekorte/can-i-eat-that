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
  const [store] = useStoreContext();

  return (
    <nav className="navbar">
      <a className="eat" href="/">
        Can I Eat That?</a> 
              
        <a className="your"> Your personal recipe finder</a>
       
      <nav className="">
        <div className="home">
          <Link to="/" className="home">Home</Link>
          <div>
          </div>
        </div>
      </nav>
      
      <nav className="">
        <div className="favorites">
          <Link to="/FavoritesList" className="favorites">Favorites</Link>
          <div>

          </div>
        </div>
      </nav>
      <nav className="">
        <div className="login">
          <Link to="/login-signup" className="login">Login</Link>
          <div>

          </div>
        </div>
      </nav>
      
      {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
    </nav>
  );
}

export default Nav;
