import React, { useContext } from "react";
import HeroCardTeam from "./HeroCardTeam";
import TeamContext from "../../context/HeroTeamContext";

const HeroList = () => {
  const { team, setTeam } = useContext(TeamContext);

  const totalStats = {};

  if (team.length > 0) {
    const powerstatsKeys = Object.keys(team[0].powerstats);
    powerstatsKeys.map((key) => (totalStats[key] = 0));
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < powerstatsKeys.length; j++) {
        if (!Number(team[i].powerstats[powerstatsKeys[j]])) {
          continue;
        }
        totalStats[powerstatsKeys[j]] += Number(
          team[i].powerstats[powerstatsKeys[j]]
        );
      }
    }
  }

  return (
    <div>
      <h5>Build your own dream hero team!</h5>
      <p>
        Note that you can only have 3{" "}
        <span style={{ color: "darkgreen" }}>good </span>
        heroes and 3 <span style={{ color: "red" }}>bad</span> heroes, so choose
        wisely! (Neutral heroes count towards either)
      </p>
      <hr />
      {team.length === 0 ? (
        <h3>
          There are currently no heroes on your team. You can add some over at
          the search page!
        </h3>
      ) : (
        <>
          <h5>Here are the current total stats of your team:</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Stat</th>
                <th scope="col">Level</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(totalStats).map((powerstat, i) => {
                return (
                  <tr key={i}>
                    <td>{powerstat}</td>
                    <td>{totalStats[powerstat]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {team.map((hero) => (
              <HeroCardTeam
                key={hero.id}
                {...hero}
                team={team}
                setTeam={setTeam}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroList;
