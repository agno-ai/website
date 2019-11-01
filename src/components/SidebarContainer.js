import "styled-components/macro";
import React, { memo } from "react";
import { css } from "styled-components";
import {
  Sidebar,
  SidebarHeader,
  SidebarMainBlock,
  SidebarFooter
} from "./Sidebar";
import { BigLink } from "./BigLink";
import useRouter from "use-react-router";
import { useHistory } from "react-router-dom";
import { matchPath } from "react-router-dom";
import useBreakpoints from "../hooks/breakpoint";
import { ReactComponent as Logo } from "../icons/logo.svg";

const SidebarContainer = ({ logout }) => {
  const { location } = useRouter();
  const history = useHistory();
  const breakPoint = useBreakpoints();

  if (breakPoint !== "lg") {
    return null;
  }

  const isActive = path =>
    !!matchPath(location.pathname, {
      path
    });

  const onClick = path => () => {
    history.push(path);
  };

  return (
    <div
      css={css`
        width: 14em;
        height: 100%;
        flex-shrink: 0;
        background-color: #fff;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      `}
    >
      <Sidebar>
        <SidebarHeader onClick={onClick("/dashboard/overview")}>
          <Logo height="100%" width={undefined} />
        </SidebarHeader>
        <SidebarMainBlock>
          <BigLink
            active={isActive("/dashboard/overview")}
            onClick={onClick("/dashboard/overview")}
          >
            Overview
          </BigLink>
          <BigLink
            active={isActive("/dashboard/monitoring")}
            onClick={onClick("/dashboard/monitoring")}
          >
            Monitoring
          </BigLink>
        </SidebarMainBlock>
        <SidebarFooter>
          <BigLink onClick={logout}>Logout</BigLink>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default memo(SidebarContainer);
