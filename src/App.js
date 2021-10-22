import React, { useState, useEffect, useReducer } from "react";
import TeamContext from "./context/HeroTeamContext";
import AuthContext from "./context/AuthContext";
import AppRouter from "./routers/AppRouter";
import authReducer from "./auth/authReducer";

const teamInit = () => {
  return JSON.parse(localStorage.getItem("team")) || [];
};

const userInit = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const App = () => {
  const [team, setTeam] = useState(teamInit);
  const [user, dispatch] = useReducer(authReducer, {}, userInit);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <TeamContext.Provider value={{ team, setTeam }}>
        <AppRouter />
      </TeamContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
