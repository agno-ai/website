import "styled-components/macro";
import React from "react";
import { css } from "styled-components";
import { ReactComponent as Hamburger } from "../icons/hamburger.svg";
import Avatar from "./Avatar";
import { useTransition, animated, config } from "react-spring";

const MobileTopbar = ({
  avatarUrl,
  sidebar,
  title,
  onRequestClose,
  onRequestOpen,
  open
}) => {
  const overlayTransitions = useTransition(open, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 0.4
    },
    leave: {
      opacity: 0
    },
    config: { ...config.stiff, clamp: true }
  });

  const sidebarTransitions = useTransition(open, null, {
    from: {
      transform: "translate3d(-105%,0,0)"
    },
    enter: {
      transform: "translate3d(0%,0,0)"
    },
    leave: {
      transform: "translate3d(-105%,0,0)"
    },
    config: { ...config.stiff, clamp: true }
  });

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
          background-color: #fff;
          color: #fff;
          font-weight: 500;
          flex-shrink: 0;
          box-shadow: 2px 2px 10px #00000025;
          border-bottom: 1px solid #ddd;
          padding-top: env(safe-area-inset-top);
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        `}
        onClick={onRequestOpen}
      >
        <div
          css={css`
            margin: 0.5em;
            width: 2em;
            height: 2em;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <Hamburger
            css={css`
              height: 0.6em;
              opacity: 0.4;
              stroke: #333;
            `}
          />
        </div>
        {title}
        <div
          css={css`
            margin-right: 0.5em;
          `}
        >
          <Avatar src={avatarUrl} />
        </div>
      </div>
      {overlayTransitions.map(
        ({ key, item, props }) =>
          item && (
            <animated.div
              key={key}
              css={css`
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                background-color: #000;
              `}
              onClick={onRequestClose}
              style={props}
            />
          )
      )}
      {sidebarTransitions.map(
        ({ key, item, props }) =>
          item && (
            <animated.div
              key={key}
              css={css`
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                max-width: 14em;
                z-index: 10000;
              `}
              style={props}
            >
              {sidebar}
            </animated.div>
          )
      )}
    </>
  );
};

export default MobileTopbar;
