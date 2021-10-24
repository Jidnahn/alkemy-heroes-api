import React from "react";
import SearchHeroCard from "./SearchHeroCard";
import useFetch from "../hooks/useFetch";

const SearchList = ({ name }) => {
  const url = `/searchUrl/api/${process.env.REACT_APP_API_KEY}/search/${name}`;
  const { data, loading, error } = useFetch(url);

  const { results } = !!data && data;

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : loading ? (
          <div className="spinner-border container" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : !results && name === "" ? (
          <div>Currently not searching for any heroes</div>
        ) : !results ? (
          <div>The hero name {name} does not match any heroes</div>
        ) : (
          results.map((hero) => {
            return <SearchHeroCard key={hero.id} {...hero} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchList;
