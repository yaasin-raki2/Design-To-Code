import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading";

interface ProtectedRouteProps {
  component: React.FC;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component, path }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    path={path}
  />
);

export default ProtectedRoute;
