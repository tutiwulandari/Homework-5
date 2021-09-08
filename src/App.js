import logo from './logo.svg';
import './App.css';
import TransaksiPage from './pages/Transaksi/TransaksiPage';
import Login from "./pages/login/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logout from "./pages/Status/Logout";
import AuthorizedRoute from "./AuthorizedRoute";
import RestrictedWrapper from "./RestrictedWrapper";
import { AuthorizedContextProvider } from "./AuthorizedContext";

function App() {
  return (
    <AuthorizedContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <RestrictedWrapper>
              <Login />
            </RestrictedWrapper>
          </Route>
          <AuthorizedRoute path="/Transaksi" exact component={TransaksiPage}></AuthorizedRoute>
          <Route path="/Signout" exact component={Logout} />
          <AuthorizedRoute path="/Home" exact component={Home}></AuthorizedRoute>
        </Switch>
      </Router>
    </AuthorizedContextProvider>
  );
}

export default App;
