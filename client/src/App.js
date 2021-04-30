import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Dashboard from './components/Dashboard';
import Preferences from "./components/Preferences";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/dashboard" component={Dashboard} />
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
