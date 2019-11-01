import "styled-components/macro";
import React from "react";
import { css } from "styled-components";

export const SidebarHeader = ({ children, onClick }) => (
  <div
    onClick={onClick}
    css={css`
      display: flex;
      margin: 1.25rem 0;
      cursor: pointer;
      flex: 1;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-grow: 1;
        justify-content: flex-start;
        height: 1.25rem;
        padding-left: 2rem;
      `}
    >
      {children}
    </div>
  </div>
);

export const SidebarMainBlock = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      padding: 2.5rem 0;
      margin-right: 1rem;
      flex: 5;
    `}
  >
    {children}
  </div>
);

export const SidebarSecondaryBlock = ({ children }) => (
  <div
    css={css`
      padding: 2em 1em;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
    `}
  >
    {children}
  </div>
);

export const SidebarFooter = ({ children }) => (
  <div
    css={css`
      padding: 2em 1em;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      flex: 1;
    `}
  >
    {children}
  </div>
);

export const Sidebar = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex: 1;
      flex-direction: column;
      flex-grow: 1;
      height: 100%;
      font-size: 1rem;
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
      padding-left: env(safe-area-inset-left);
      background-color: #ffffff;
      overflow-y: auto;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      -webkit-overflow-scrolling: touch;
    `}
  >
    {children}
  </div>
);
