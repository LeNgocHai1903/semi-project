import React from "react";
import "./Main.css";

import Home from "../../components/Home/Home";
import Register from "../../components/Register/Register";
import Booking from '../../components/Booking/Booking';

import Test from '../../components/Booking/Test';

import { Route, Switch,Redirect } from "react-router-dom";

const Main = () => {
    let routes = (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Redirect to="/"/>
        </Switch>
      );
  return <main>{routes}</main>;
};

export default Main;
