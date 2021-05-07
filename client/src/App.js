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
import PrivateRoute from "./utils/PrivateRoute";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDbmkv3v6WdlJ5OdHuBvLLRLFROcrVth-k",
  authDomain: "can-i-eat-that-d11ed.firebaseapp.com",
  projectId: "can-i-eat-that-d11ed",
  storageBucket: "can-i-eat-that-d11ed.appspot.com",
  messagingSenderId: "477223806458",
  appId: "1:477223806458:web:4fdf2320faa132f7e73043",
  measurementId: "G-V1PSVTC1JE",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // Firebase Auth
  const [user] = useAuthState(auth);

  const [name, setName] = useState();
  useEffect(() => {(async () => {
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

  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {


  //   const APIKEY = "1a69c78b7e77773efa62829cc3f05013";
  //   const APIID = "46239d36";

  //   const getRecipes = async () => {
  //     // fetch
  //     const result = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APIID}&app_key=${APIKEY}&from=${pagination}&to=${pagination+10}`)

  //     const data = await result.json();
  //     console.log(data)
  //   }
  //   getRecipes();
  //   }, [searchTerm])




return (
  <Router>
    <div className="App">
      <StoreProvider>
        <Nav name={name} />
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

      <header className="App-header">
        <Logout />
      </header>

      <section>{user ? <Home /> : <Login />}</section>
    </div>
  </Router>
);
}

export default App;
