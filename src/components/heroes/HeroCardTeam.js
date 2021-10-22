import React from "react";
import { Link } from "react-router-dom";

const HeroCardTeam = ({ team, setTeam, ...hero }) => {
  const { powerstats } = hero;

  const handleRemove = () => {
    let teamCopy = [];
    for (let i = 0; i < team.length; i++) {
      teamCopy.push(JSON.stringify(team[i]));
    }

    const index = teamCopy.indexOf(JSON.stringify(hero));
    teamCopy.splice(index, 1);

    const length = teamCopy.length;
    for (let i = 0; i < length; i++) {
      teamCopy.push(JSON.parse(teamCopy[i]));
    }
    teamCopy.splice(0, teamCopy.length / 2);

    setTeam(teamCopy);
  };

  return (
    <div className="col">
      <div className="card mb-3">
        <img
          src={hero.image.url}
          className="img-fluid rounded-start mx-auto my-auto d-block"
          alt={hero.name}
        />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Stat</th>
                <th scope="col">Level</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(powerstats).map((powerstat, i) => {
                return (
                  <tr key={i}>
                    <td>{powerstat}</td>
                    <td>{powerstats[powerstat]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="btn btn-danger me-2 my-auto"
            onClick={handleRemove}
          >
            Remove
          </button>
          <Link className="btn btn-outline-warning" to={`./hero/${hero.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCardTeam;
