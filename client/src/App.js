import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Login/SignIn";
import theme from "./resources/theme";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path={"/login"}>
          <SignIn />
        </Route>
        <Route path={"/homepage"}>
          <Homepage />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
