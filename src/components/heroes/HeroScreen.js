import React from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import HeroCardDetails from "./HeroCardDetails";

const HeroDetails = ({ history }) => {
  const { heroId } = useParams();

  const url = `/api/${process.env.REACT_APP_API_KEY}/${heroId}`;
  const { data, loading, error } = useFetch(url);

  const result = !!data && data;

  if (result.response === "error") {
    history.push("/");
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : result.response === "error" ? null : (
        <HeroCardDetails hero={result} />
      )}
    </div>
  );
};

export default HeroDetails;
