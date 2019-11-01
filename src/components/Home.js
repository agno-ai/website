import "styled-components/macro";
import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { css } from "styled-components";
import SidebarContainer from "./SidebarContainer";
import MobileTopbarContainer from "./MobileTopbarContainer";
import Overview from "./Overview";
import useBreakpoints from "../hooks/breakpoint";
import Monitoring from "./Monitoring";

export default function Home() {
  const [logout, setLogout] = useState(false);
  const breakPoint = useBreakpoints();

  const logoutHandle = () => {
    localStorage.clear();
    setLogout(true);
  };

  const Vertical = () => (
    <div
      css={css`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        height: 100%;
      `}
    >
      <Switch>
        <Redirect from="/" exact to="/dashboard" />
        <Redirect from="/dashboard" exact to="/dashboard/overview" />
        <Route path="/dashboard">
          <Switch>
            <Route path={["/dashboard/overview", "/dashboard/monitoring"]}>
              <MobileTopbarContainer logout={logoutHandle} />
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  min-height: 0;
                  min-width: 0;
                  flex-grow: 1;
                  overflow-y: auto;
                  -webkit-overflow-scrolling: touch;
                  padding: 1.5em 2em;
                  padding: ${breakPoint === "xs" || breakPoint === "sm"
                    ? "1.5em 0.75em"
                    : "1.5em 2em"};
                  background-color: #f4f5fa;
                `}
              >
                <Switch>
                  <Route path="/dashboard/overview" component={Overview} />
                  <Route path="/dashboard/monitoring" component={Monitoring} />
                </Switch>
              </div>
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );

  const Dashboard = () => (
    <div
      css={css`
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-direction: row;
        height: 100%;
        background-color: #f4f5fa;
      `}
    >
      <SidebarContainer logout={logoutHandle} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 0;
          min-width: 0;
          overflow-y: auto;
          flex-grow: 1;
          flex: 1;
          -webkit-overflow-scrolling: touch;
          padding: 1.5em 4em;
        `}
      >
        <Switch>
          <Redirect from="/" exact to="/dashboard" />
          <Redirect from="/dashboard" exact to="/dashboard/overview" />
          <Route path="/dashboard">
            <Route path="/dashboard/overview" component={Overview} />
            <Route path="/dashboard/monitoring" component={Monitoring} />
          </Route>
        </Switch>
      </div>
    </div>
  );

  return logout ? (
    <Redirect to="/" />
  ) : breakPoint === "lg" ? (
    <Dashboard />
  ) : (
    <Vertical />
  );
}
