import React from "react";
import { Link } from "react-router-dom";

const HeroCardDetails = ({ hero }) => {
  const { biography, appearance, work } = hero;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={hero.image.url}
            className="img-fluid rounded-start"
            alt={hero.name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{hero.name}</h3>
            <ul className="list-group-flush">
              <li className="list-group-item">
                <b>Name:</b> {biography["full-name"]}
              </li>
              <li className="list-group-item">
                <b>Alias(es):</b>
                <ul>
                  {biography.aliases.map((alias, i) => (
                    <li key={i}>{alias}</li>
                  ))}
                </ul>
              </li>
              <li className="list-group-item">
                <b>Weight:</b> {appearance.weight[1]}
              </li>
              <li className="list-group-item">
                <b>Height:</b> {appearance.height[1]}
              </li>
              <li className="list-group-item">
                <b>Eye color:</b> {appearance["eye-color"]}
              </li>
              <li className="list-group-item">
                <b>Hair color:</b> {appearance["hair-color"]}
              </li>
              <li className="list-group-item">
                <b>Workplace:</b> {work.base}
              </li>
            </ul>
            <Link to="/" className="btn btn-dark d-block">
              Back to team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardDetails;
