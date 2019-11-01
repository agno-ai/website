import React, { useState } from "react";
import MobileTopbar from "./MobileTopbar";
import useBreakpoints from "../hooks/breakpoint";
import {
  Sidebar,
  SidebarHeader,
  SidebarMainBlock,
  SidebarFooter
} from "./Sidebar";
import { matchPath } from "react-router-dom";
import useRouter from "use-react-router";
import { BigLink } from "./BigLink";
import { ReactComponent as Logo } from "../icons/logo.svg";

const MobileTopbarContainer = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const breakPoint = useBreakpoints();
  const { location, history } = useRouter();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const isActive = path =>
    !!matchPath(location.pathname, {
      path
    });

  const onClick = path => () => {
    history.push(path);
    setIsOpen(false);
  };

  if (breakPoint === "lg") {
    return null;
  }
  return (
    <MobileTopbar
      open={isOpen}
      onRequestClose={close}
      onRequestOpen={open}
      sidebar={
        <Sidebar>
          <SidebarHeader onClick={onClick("/dashboard")}>
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
      }
      avatarUrl={""}
      title={<Logo height="50%" width={undefined} />}
    />
  );
};

export default MobileTopbarContainer;
