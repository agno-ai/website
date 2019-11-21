import "styled-components/macro";
import React, { useEffect, useState } from "react";
import { css } from "styled-components";
import useBreakpoints from "../hooks/breakpoint";
import ListItem from "./ListItem";
import "react-vis/dist/style.css";
import { formatDistance } from "date-fns";

const Overview = () => {
  const breakPoint = useBreakpoints();
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch("http://agno-dev.eu-central-1.elasticbeanstalk.com/api/users").then(
      r =>
        r.json().then(rJson => {
          rJson.sort((a, b) => {
            if (
              new Date(a.timestamp).valueOf() > new Date(b.timestamp).valueOf()
            ) {
              return -1;
            } else {
              return 1;
            }
          });
          setResponse(rJson);
        })
    );
  }, []);

  return (
    <div
      css={css`
        font-weight: 700;
        font-size: 1.25em;
      `}
    >
      Overview
      <div
        css={css`
          display: grid;
          grid-gap: ${breakPoint !== "lg" ? "1em" : "2em"};
          grid-template-columns: ${breakPoint !== "lg" ? "auto" : "auto auto"};
          margin: ${breakPoint !== "lg" ? "1em 0" : "2em 0"};
        `}
      >
        <div
          css={css`
            display: grid;
            padding: 0 2em;
            background-color: #fff;
            box-shadow: 0px 0px 15px #00000010;
            grid-column: ${breakPoint !== "lg" ? "1 / span 1" : "1 / span 2"};
            border-radius: 10px;
            min-height: 10rem;
            align-items: center;
            flex-direction: row;
            position: relative;
          `}
        >
          <div
            css={css`
              font-weight: 600;
              font-size: ${breakPoint === "xs" ? "0.6em" : "0.75em"};
              max-width: 45%;
            `}
          >
            {` Welcome back, you have ${response.length} face logs`}
          </div>
          <img
            alt=""
            css={css`
              position: absolute;
              height: ${breakPoint === "sm"
                ? "12rem"
                : breakPoint === "xs"
                ? "8.5rem"
                : "19rem"};
              right: 0;
              bottom: ${breakPoint === "sm"
                ? "-1rem"
                : breakPoint === "xs"
                ? "0.75rem"
                : "-3.5rem"};
            `}
            src={require("../assets/nothing.png")}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 1.5em 2em;
            grid-column: ${breakPoint !== "lg" ? "1 / span 1" : "1 / span 2"};
            background-color: #fff;
            box-shadow: 0px 0px 15px #00000010;
            border-radius: 10px;
            min-height: 21rem;
          `}
        >
          <div
            css={css`
              font-weight: 800;
              font-size: 0.65em;
              margin-bottom: 0.5em;
            `}
          >
            {`Emotion activity (${response.length})`}
          </div>
          {response.map((item, index) => (
            <ListItem
              emotion={item.emotion}
              title={`${item.face_id} was ${item.emotion}`}
              subtitle={formatDistance(new Date(item.timestamp), new Date(), {
                includeSeconds: true,
                addSuffix: true
              })}
              last={index === response.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
