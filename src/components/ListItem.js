import "styled-components/macro";
import React from "react";
import { css } from "styled-components";

const ListItem = ({ title, subtitle, emotion, last = false }) => {
  const getEmotion = emotion => {
    if (emotion === "Happy") {
      return "😁";
    }
    if (emotion === "Sad") {
      return "☹️";
    }
    if (emotion === "Fearful") {
      return "😨";
    }
    if (emotion === "Suprised") {
      return "😱";
    }
    if (emotion === "Disgusted") {
      return "😫";
    }
    if (emotion === "Angry") {
      return "😠";
    }
    return "❓";
  };
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        padding: 1rem;
        flex-direction: row;
        border-bottom: ${!last ? "1px solid #f5f5f5" : ""};
      `}
    >
      <div
        css={css`
          margin-right: 1rem;
        `}
      >
        {getEmotion(emotion)}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          flex-direction: column;
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
    </div>
  );
};

export default ListItem;
