import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddImage from './components/AddImage/AddImage';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div data-testid="test-App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/addImage">
              <AddImage />
            </PrivateRoute>
            <PrivateRoute path="/dashBoard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/signedIn">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
