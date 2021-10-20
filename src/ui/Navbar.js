import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Heroes team
        </a>
        <a className="navbar-brand" href="/search">
          Search
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
