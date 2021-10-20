import React from "react";
import HeroList from "../heroes/HeroList";

const HomeScreen = () => {
  return (
    <div className="container">
      <h1>Home Screen</h1>
      <hr />
      <HeroList />
    </div>
  );
};

export default HomeScreen;
