import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import ProtectedRoute from "./auth/protected-route";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
