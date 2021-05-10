import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import LoginSignup from "./pages/LoginSignup";
import PrivateRoute from "./utils/PrivateRoute";
import firebase from "firebase/app";
import { auth } from "./config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  // Firebase Auth
  const [user] = useAuthState(auth);

  const [name, setName] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch("/home", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("response: ", response);
      const content = await response.json();
      console.log("content: ", content);
      setName(content.name);
    })();
  }, []);

  function Login() {
    const loginWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return <button onClick={loginWithGoogle}>Sign in with Google</button>;
  }

  function Logout() {
    return (
      auth.currentUser && (
        <button onClick={() => auth.logout()}>Sign Out</button>
      )
    );
  }

  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Nav name={name} />
          <header className="App-header">
            <Logout />
          </header>
          <section>{user ? <></> : <Login />}</section>
          <Switch>
            <Route exact path="/" component={() => <Home name={name} />} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/recipes/:id" component={Detail} />

            <PrivateRoute exact path="/preferences" component={Preferences} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/favorites" component={FavoritesList} />
            <Route exact path="/login-signup" component={LoginSignup} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
