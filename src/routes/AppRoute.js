import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../components/Contact";
import Friends from "../components/Friends";
import Home from "../components/Home";
import Dashboard from "../Pages/Dashboard";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/friends">
        <Friends></Friends>
      </Route>
      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  );
};

export default AppRoute;
