import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import HeroTeamContext from "../../context/HeroTeamContext";

const Navbar = () => {
  const { setTeam } = useContext(HeroTeamContext);
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    dispatch({
      type: "logout",
      payload: {},
    });

    setTeam([]);

    history.replace("/");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand ms-2" to="/">
        Hero Teambuilder
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto">
          <button className="nav-item nav-link btn me-2" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
