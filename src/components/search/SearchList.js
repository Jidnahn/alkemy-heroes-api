import React from "react";
import HeroCardSearch from "../heroes/HeroCardSearch";
import useFetch from "../hooks/useFetch";

const SearchList = ({ name }) => {
  const url = `http://localhost:8010/proxy/api/${process.env.REACT_APP_API_KEY}/search/${name}`;
  const { data, loading, error } = useFetch(url);

  const { results } = !!data && data;

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {loading ? (
          <div>Loading...</div>
        ) : !results && name === "" ? (
          <div>Currently not searching for any heroes</div>
        ) : !results ? (
          <div>The hero name {name} does not match any heroes</div>
        ) : (
          results.map(
            ({ id, name, image: { url }, biography: { alignment } }) => {
              return (
                <HeroCardSearch
                  key={id}
                  name={name}
                  image={url}
                  alignment={alignment}
                />
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default SearchList;
