import "styled-components/macro";
import React from "react";
import { css } from "styled-components";

export const BigLink = ({ icon, count, children, active, ...rest }) => (
  <button
    css={css`
      touch-action: none;
      user-select: none;
      display: flex;
      flex-shrink: 0;
      position: relative;
      justify-content: space-between;
      text-decoration: none;
      font-size: 0.9rem;
      margin: 0;
      padding: 1em 1.5em 1em;
      padding-left: ${active ? "30px" : "33px"};
      font-weight: 600;
      overflow: hidden;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      color: ${active ? "#1F36AB" : "#333333"};
      background-color: ${active ? "#e7eafd" : "#FFF"};
      outline: none;
      border: none;
      border-left: ${active ? "3px solid #1F36AB" : "none"};
      cursor: pointer;
    `}
    {...rest}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div>{children}</div>
    </div>
  </button>
);
