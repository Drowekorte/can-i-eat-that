import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import LoginSignup from "./pages/LoginSignup";
import useToken from "./utils/useToken";
import PrivateRoute from "./utils/PrivateRoute";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebasehooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  
});

const auth = firebase.auth();
const firestore = firebase.firestore();


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

      const content = await response.json();

      setName(content.name);
    })();
  });

  const { token, setToken } = useToken();

  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav name={name} />
          <Switch>
            <Route exact path="/" component={() => <Home name={name} />} />
            <Route exact path="/home" component={Home} />
            {/* Change posts to recipes */}
            <Route exact path="/posts/:id" component={Detail} />

            <PrivateRoute exact path="/preferences" component={Preferences} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/favorites" component={FavoritesList} />
            <Route component={LoginSignup} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
      <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <Logout />
      </header>

      <section>
        {user ? <Home /> : <Login />}
      </section>

    </div>
    </Router>
    
  );
}

function Login() {
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function Logout() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}


export default App;
