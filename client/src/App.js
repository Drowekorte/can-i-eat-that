import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState , useEffect } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Dashboard from './components/Dashboard';
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import Signup from "./components/Signup";
import useToken from "./useToken";


function App() {

const [name, setName] = useState();
  useEffect(() => {
    (
      async () => {

        
       const response = await fetch("http://localhost:3000/home", {
          headers: { "Content-type": "application/json",
          "Accept": "application/json"
         },
          credentials: "include",
        });

        const content = await response.json();

        setName(content.name);
      }
  )();
});

const {token, setToken} = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  } 



  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav  name={name}/>
          <Switch>
            <Route exact path="/" component={() => <Home name={name} />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={() => <Login setName={setName}/>} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/preferences" component={Preferences} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
