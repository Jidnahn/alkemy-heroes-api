import React from "react";

const HeroCardTeam = () => {
  return (
    <div className="col">
      <div className="card mb-3" style={{ maxWidth: "430px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="data:image/jpeg;base64,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"
              className="img-fluid rounded-start mx-auto my-auto d-block"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <hr />
              <button className="btn btn-danger me-2 my-auto">
                Add to team
              </button>
              <button className="btn btn-outline-warning">Hero details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardTeam;
