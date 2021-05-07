import React from "react";
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

  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={() => <Home user={user} />} />
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
