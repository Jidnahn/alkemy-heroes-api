import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "../components/ui/Navbar";
import HeroScreen from "../components/heroes/HeroScreen";
import SearchScreen from "../components/search/SearchScreen";
import HomeScreen from "../components/home/HomeScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
