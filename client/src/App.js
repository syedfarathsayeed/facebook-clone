import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Homepage from "./pages/Homepage";
import theme from "./resources/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Homepage />
    </MuiThemeProvider>
  );
}

export default App;
