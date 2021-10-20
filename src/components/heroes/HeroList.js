import React from "react";
import useFetch from "../hooks/useFetch";
import HeroCardSearch from "./HeroCardSearch";

const HeroList = () => {
  const name = "batman";
  const url = `http://localhost:8010/proxy/api/${process.env.REACT_APP_API_KEY}/search/${name}`;
  const { data, loading, error } = useFetch(url);

  console.log(data, loading, error);

  return (
    <div>
      <HeroCardSearch />
    </div>
  );
};

export default HeroList;
