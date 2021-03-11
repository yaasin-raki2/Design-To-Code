import React from "react";
import { NavLink } from "react-router-dom";

const MainNav: React.FC = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/profile" exact>
      Profile
    </NavLink>
  </div>
);

export default MainNav;
