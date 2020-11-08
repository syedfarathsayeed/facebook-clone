import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import SignIn from "./pages/Login/SignIn";
import theme from "./resources/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SignIn />
    </MuiThemeProvider>
  );
}

export default App;
