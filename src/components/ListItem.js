import "styled-components/macro";
import React from "react";
import { css } from "styled-components";

const ListItem = ({ title, subtitle, last = false }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex: 1;

        border-bottom: ${!last ? "1px solid #f5f5f5" : ""};
      `}
    >
      <div
        css={css`
          font-size: 0.55em;
          color: #4f4f4f;
          font-weight: 600;
          margin-bottom: 0.5em;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          font-size: 0.5em;
          color: #828282;
          font-weight: 400;
        `}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default ListItem;
