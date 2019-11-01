import "styled-components/macro";
import React from "react";
import { css } from "styled-components";
import useBreakpoints from "../hooks/breakpoint";
import ListItem from "./ListItem";
import { RadarChart, CircularGridLines } from "react-vis";
import "react-vis/dist/style.css";

const recentActivity = [
  { title: "Emotion logged", subtitle: " 13 seconds ago" },
  { title: "Emotion logged", subtitle: " 53 seconds ago" },
  { title: "Emotion logged", subtitle: " 7 minutes ago" },
  { title: "Emotion logged", subtitle: " 2 hours ago" },
  { title: "Emotion logged", subtitle: " 17 hours ago" },
  { title: "Emotion logged", subtitle: " 3 days ago" }
];

const DATA = [
  {
    name: "Emotions",
    sad: 5,
    happy: 4,
    fear: 0,
    disgust: 4,
    anger: 5,
    suprise: 3,
    fill: "#1F36AB",
    stroke: "#1F36AB"
  }
];

const Overview = () => {
  const breakPoint = useBreakpoints();

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
            Welcome back Kasparas, you have 3 new logs
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
            display: grid;
            padding: 1.5em 2em;
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
              margin-bottom: 2em;
            `}
          >
            Emotion graph
          </div>
          <div
            css={css`
              display: flex;
              flex: 1;
              align-items: center;
              justify-content: center;
            `}
          >
            <RadarChart
              css={css`
                font-weight: 600;
                font-size: 0.5em;
                color: #333;
                justify-content: center;
              `}
              style={{
                polygons: {
                  strokeWidth: 2,
                  strokeOpacity: 0.8,
                  fillOpacity: 0.2,
                  color: "#000"
                },
                labels: {
                  textAnchor: "middle"
                },
                axes: {
                  line: {
                    fillOpacity: 0.5,
                    strokeWidth: 0.5,
                    strokeOpacity: 0.8
                  },
                  ticks: {
                    fillOpacity: 0,
                    strokeOpacity: 0
                  }
                }
              }}
              margin={{
                left: 60,
                top: 30,
                bottom: 30,
                right: 60
              }}
              tickFormat={t => ""}
              data={DATA}
              startingAngle={0}
              domains={[
                { name: "Sad", domain: [0, 7], getValue: d => d.sad },
                {
                  name: "Happy",
                  domain: [0, 7],
                  getValue: d => d.happy
                },
                { name: "Fearful", domain: [0, 7], getValue: d => d.fear },
                {
                  name: "Disgusted",
                  domain: [0, 7],
                  getValue: d => d.disgust
                },
                { name: "Angry", domain: [0, 7], getValue: d => d.anger },
                { name: "Suprised", domain: [0, 7], getValue: d => d.suprise }
              ]}
              width={400}
              height={400}
            >
              <CircularGridLines
                tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
              />
            </RadarChart>
          </div>
        </div>
        <div
          css={css`
            display: grid;
            padding: 1.5em 2em;
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
            Recent activity
          </div>
          {recentActivity.map((item, index) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              last={index === recentActivity.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
