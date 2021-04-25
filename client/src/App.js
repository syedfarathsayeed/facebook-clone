import { MuiThemeProvider } from "@material-ui/core";
import React, { lazy } from "react";
import theme from "./resources/theme";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { useToken } from "./cookies";
import { Loader } from "./components";

export const loginPath = '/login'

export const homepagePath = '/home'

const Login = lazy(() => import('./pages/Login/SignIn'))
const Homepage = lazy(() => import('./pages/Homepage'))

function App() {
  const location = useLocation()
  const { token } = useToken()

  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Redirect from="/" to={loginPath} exact />
          {/* When the user has a token cookie and try to go to the
        login page, he is redirected to the homepage */}
          {token && <Redirect from={loginPath}
            to={homepagePath} exact />}
          {/* When the user has no token, he is redirected to
        the login page (except if he is already in the login page ofcourse)  */}
          {!token && location.pathname !== loginPath &&
            <Redirect to={{ pathname: loginPath, state: { from: location, reason: "notLogged" } }} />}
          <Route exact path={loginPath} component={Login} />
          <Route component={Homepage} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
