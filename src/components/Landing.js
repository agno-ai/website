import "styled-components/macro";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { useHistory } from "react-router-dom";

const Button = styled.button`
  font-size: 1em;
  font-weight: 700;
  padding: 0.8em 1.75em;
  width: 10rem;
  border-radius: 4px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  opacity: 1;
  position: relative;
  border: none;
  margin: 2em 0 0 0;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #1f36ab;
  color: #fff;
  box-shadow: 2px 2px 10px #00000025;
  @media (hover: hover) {
    &:hover {
      background-color: #162781;
    }
  }
`;

const OutlinedButton = styled.button`
  font-size: 0.85em;
  font-weight: 700;
  width: 7.5rem;
  padding: 0.75em 1.7em;
  border-radius: 4px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  opacity: 1;
  position: relative;
  border: 2px solid #000;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  color: #000;

  @media (hover: hover) {
    &:hover {
      background-color: #000;
      color: #ffffff;
    }
  }

  ${props =>
    props.inverted &&
    css`
      background-color: #282828;
      border: 2px solid white;
      color: white;
      @media (hover: hover) {
        &:hover {
          background-color: white;
          color: #282828;
        }
      }
    `}
`;

const Landing = () => {
  const history = useHistory();
  const featureRef = useRef(null);

  const loginAction = () => {
    history.push("/login");
  };

  return (
    <div
      css={css`
        display: block;
        flex-direction: column;
        width: 100%;
      `}
    >
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          width: 100%;
        `}
      >
        <Logo
          height="30%"
          width={undefined}
          css={css`
            margin-left: 2em;
          `}
        />
        <OutlinedButton
          onClick={loginAction}
          css={css`
            margin-right: 2em;
          `}
        >
          Login
        </OutlinedButton>
      </header>

      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            margin-top: 4rem;
            max-width: 65%;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 50%;
            `}
          >
            <div
              css={css`
                display: inline-block;

                flex-direction: column;
                justify-content: center;
              `}
            >
              <div
                css={css`
                  font-weight: 800;
                  font-size: 2.5em;
                  width: 60%;
                  margin-bottom: 1.25rem;
                `}
              >
                Tired of being miserable?
              </div>
              <div
                css={css`
                  font-weight: 300;
                  font-size: 0.9em;
                  width: 60%;
                `}
              >
                World's first smart mirror that seamlessly keeps track of your
                mood and health parameters to keep you out of the dark side{" "}
              </div>
              <Button onClick={() => featureRef.current.scrollIntoView()}>
                Learn more
              </Button>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: flex-end;
              width: 50%;
            `}
          >
            <img
              css={css`
                width: 60%;
              `}
              src={require("../assets/mirror.png")}
              alt=""
            />
          </div>
        </div>
        <div
          ref={featureRef}
          css={css`
            display: flex;
            margin-top: 12rem;
            width: 75%;
            align-items: center;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              flex: 1;
            `}
          >
            <div
              css={css`
                font-weight: 800;
                font-size: 2em;
                margin-bottom: 0.5rem;
              `}
            >
              Features
            </div>
            <div
              css={css`
                font-weight: 300;
                font-size: 0.9em;
              `}
            >
              Our mirror does these things to help you
            </div>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 6rem;
              width: 100%;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex: 1;
                min-height: 20rem;
                max-width: 18rem;
                padding: 0.75em;
                border-radius: 7px;
                box-shadow: 0px 5px 15px #00000015;
              `}
            >
              <div
                css={css`
                  font-weight: 600;
                  font-size: 1.5em;
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                  text-align: center;
                `}
              >
                Security
              </div>
              <div
                css={css`
                  font-weight: 300;
                  font-size: 0.7em;
                  margin-bottom: 1rem;
                  color: #666;
                  max-width: 75%;
                  text-align: center;
                `}
              >
                AI powered security to ensure that only you see your data
              </div>
              <img
                css={css`
                  width: 95%;
                `}
                src={require("../assets/security.png")}
                alt=""
              />
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex: 1;
                min-height: 20rem;
                max-width: 18rem;
                padding: 0.75em;
                margin-left: 6rem;
                margin-right: 6rem;
                border-radius: 7px;
                box-shadow: 0px 5px 15px #00000015;
              `}
            >
              <div
                css={css`
                  font-weight: 600;
                  font-size: 1.5em;
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                  text-align: center;
                `}
              >
                Tracking
              </div>
              <div
                css={css`
                  font-weight: 300;
                  font-size: 0.7em;
                  margin-bottom: 1rem;
                  color: #666;
                  max-width: 75%;
                  text-align: center;
                `}
              >
                Track your sleep deprivation and emotions
              </div>
              <img
                css={css`
                  width: 95%;
                `}
                src={require("../assets/waiting.png")}
                alt=""
              />
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex: 1;
                min-height: 20rem;
                max-width: 18rem;
                padding: 0.75em;
                border-radius: 7px;
                box-shadow: 0px 5px 15px #00000015;
              `}
            >
              <div
                css={css`
                  font-weight: 600;
                  font-size: 1.5em;
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                  text-align: center;
                `}
              >
                Be Happy
              </div>
              <div
                css={css`
                  font-weight: 300;
                  font-size: 0.7em;
                  margin-bottom: 1rem;
                  color: #666;
                  max-width: 75%;
                  text-align: center;
                `}
              >
                Improve your well-being and be happier
              </div>
              <img
                css={css`
                  width: 95%;
                `}
                src={require("../assets/done.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            margin-top: 14rem;
            margin-bottom: 10rem;
            max-width: 70%;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              width: 60%;
            `}
          >
            <img
              css={css`
                width: 100%;
              `}
              src={require("../assets/experience.png")}
              alt=""
            />
          </div>
          <div
            css={css`
              padding-top: 6rem;
              padding-left: 2rem;
              display: flex;
              flex-direction: column;
              width: 40%;
            `}
          >
            <div
              css={css`
                display: inline-block;
                flex-direction: column;
                justify-content: center;
              `}
            >
              <div
                css={css`
                  font-weight: 800;
                  font-size: 1.75em;
                  width: 80%;
                  margin-bottom: 1.25rem;
                `}
              >
                Expierience Matters
              </div>
              <div
                css={css`
                  font-weight: 300;
                  font-size: 0.9em;
                  width: 75%;
                `}
              >
                Track what matters to you and live a better and happier life. No
                friction, it's all magic! The agno.io mirror works by using the
                state of the art artificial intelligence to deliver stellar
                performance.
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        css={css`
          display: flex;
          background-color: #282828;
          padding: 4rem;
        `}
      >
        <div
          css={css`
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-weight: 800;
              font-size: 1.25em;
              color: #fff;
              margin-bottom: 4rem;
            `}
          >
            Partners:
          </div>
          <img
            css={css`
              width: 25%;
            `}
            src={require("../assets/hs-logo.png")}
            alt=""
          />
        </div>
        <div
          css={css`
            display: flex;
            flex: 2;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-weight: 800;
              font-size: 1.25em;
              color: #fff;
              margin-bottom: 2.5rem;
            `}
          >
            Team:
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              font-weight: 500;
              letter-spacing: 0.05em;
              font-size: 0.8em;
              color: white;
            `}
          >
            <div
              css={css`
                display: flex;
                height: 100%;
                flex-direction: column;
              `}
            >
              <div
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                Lucas Mahler
              </div>
              <div
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                Patrick Gautheret
              </div>
              <div
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                Anna Bussas
              </div>
              <div>Sydney Nkemakolam</div>
            </div>
            <div
              css={css`
                width: 4rem;
              `}
            />
            <div
              css={css`
                display: flex;
                height: 100%;
                flex-direction: column;
              `}
            >
              <div
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                Kasparas Gudzius
              </div>
              <div
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                Patricio Reller
              </div>
              <div
                css={css`
                  margin-bottom: 0.25em;
                `}
              >
                Anthony Akpenyi
              </div>
              <div>Oleksander Shlapak</div>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-weight: 800;
              font-size: 1.25em;
              color: #fff;
              margin-bottom: 4rem;
            `}
          >
            Use the App
          </div>
          <OutlinedButton onClick={loginAction} inverted>
            Login
          </OutlinedButton>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
