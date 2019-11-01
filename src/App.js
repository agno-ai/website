import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFound from "./components/NotFound";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%; 
    width: 100%;
    overflow: hidden;
    touch-action: none;
  }
  body {
    display: flex;
    flex:1;
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }
`;

const App = () => (
  <>
    <GlobalStyle whiteColor />
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/">
          <Redirect from="/" to="/dashboard" />
        </Route>
        <PrivateRoute path="/dashboard" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
