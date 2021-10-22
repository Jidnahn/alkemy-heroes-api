import React, { useContext } from "react";
import TeamContext from "../../context/HeroTeamContext";

const HeroCardSearch = ({ ...hero }) => {
  const { team, setTeam } = useContext(TeamContext);

  const handleAdd = () => {
    if (team.length > 0) {
      for (let i = 0; i < team.length; i++) {
        if (JSON.stringify(team[i]) === JSON.stringify(hero)) {
          alert("Hero is already in the team");
          return;
        }
      }
      if (team.length >= 6) {
        alert("Team limit reached");
        return;
      }
      let goodCounter = 0;
      let badCounter = 0;
      for (let i = 0; i < team.length; i++) {
        if (team[i].biography.alignment === "good") {
          goodCounter++;
        } else if (team[i].biography.alignment === "bad") {
          badCounter++;
        } else {
          goodCounter < badCounter
            ? goodCounter++
            : badCounter < goodCounter
            ? badCounter++
            : badCounter === goodCounter && hero.biography.alignment === "good"
            ? badCounter++
            : goodCounter++;
        }
      }
      if (hero.biography.alignment === "good" && goodCounter === 3) {
        alert("Can't add: Good hero alignment limit reached");
        return;
      } else if (hero.biography.alignment === "bad" && badCounter === 3) {
        alert("Can't add: Bad hero alignment limit reached");
        return;
      } else if (hero.biography.alignment === "neutral" && team.length >= 6) {
        alert("Can't add: Team limit reached");
        return;
      }
    }
    setTeam([...team, hero]);
    alert("Hero added to the team");
  };

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-6">
            <img src={hero.image.url} className="card-img" alt={hero.name} />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text">
                <small>Alignment: {hero.biography.alignment}</small>
              </p>
              <button
                onClick={handleAdd}
                type="submit"
                className="btn btn-primary"
              >
                Add to team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSearch;
