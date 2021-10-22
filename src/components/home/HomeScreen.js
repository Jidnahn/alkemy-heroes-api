import React from "react";
import HeroList from "../heroes/HeroList";

const HomeScreen = () => {
  return (
    <div className="container">
      <h1>Your team</h1>
      <hr />
      <HeroList />
    </div>
  );
};

export default HomeScreen;
