import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar: React.FC = () => {
  return (
    <nav>
      <MainNav />
      <AuthNav />
    </nav>
  );
};

export default NavBar;
