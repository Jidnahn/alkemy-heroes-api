import React from "react";
import HomeScreen from "./components/home/HomeScreen";
import SearchForm from "./components/search/SearchForm";
import Navbar from "./ui/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchForm />
    </div>
  );
};

export default App;
