import React from "react";

const HeroCardSearch = ({ name, image, alignment }) => {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-6">
            <img src={image} className="card-img" alt={name} />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <small>Alignment: {alignment}</small>
              </p>
              <button className="btn btn-primary">Add to team</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSearch;
