import { useContext } from "react";
import {
  BrowserRouter,
  RouteProps,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Dashboard } from "../screens/Dashboard";
import { AuthContext } from "../contexts/auth";
import { Login } from "../screens/Login";

const Routes: React.FC<RouteProps> = ({ ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route
          path="/dashboard"
          render={({ location }) =>
            user ? (
              <Dashboard />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
