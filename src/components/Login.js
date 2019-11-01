import "styled-components/macro";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";
import useBreakpoints from "../hooks/breakpoint";
import { ReactComponent as Logo } from "../icons/logo.svg";

const Button = styled.button`
  font-size: 1em;
  font-weight: 700;
  width: 21.25rem;
  padding: 1.075em 1em;
  border-radius: 6px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  opacity: 1;
  position: relative;
  border: none;
  margin: 3em 0 0 0;
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

const Input = styled.input`
  font-family: inherit;
  font-size: 1em;
  min-height: 2.25rem;
  margin: 1em 0 0 0;
  padding: 0.5em 1em;
  width: 19em;
  color: #000;
  border-radius: 6px;
  border: 2px solid #d0d7e2;
  background: #fff;
  appearance: none;
  outline: none;
  transition: border 150ms cubic-bezier(0.39, 0.575, 0.565, 1);
  resize: vertical;

  &::placeholder {
    color: #d0d7e2;
  }

  &:active,
  &:focus {
    border: 2px solid #1f36ab;
  }

  &:hover {
    border: 2px solid #1f36ab;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const breakPoint = useBreakpoints();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setRedirect(true);
    }
  }, []);

  const handleSubmit = () => {
    if (email === "admin" && password === "admin") {
      localStorage.setItem("authToken", "yes");
      setRedirect(true);
    }
  };

  return redirect ? (
    <Redirect to="dashboard" />
  ) : (
    <div
      css={css`
        display: flex;
        flex-grow: 1;
        height: 100%;
        width: 100%;
      `}
    >
      <Logo
        css={css`
          position: absolute;
          top: 1.75rem;
          left: 1.75rem;
        `}
        height="3.35%"
        width={undefined}
      />
      {breakPoint === "lg" && (
        <div
          css={css`
            display: flex;
            flex-grow: 1;
            width: 50%;
            background: #f4f5fa;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            css={css`
              height: 60%;
            `}
            src={require("../assets/sign-in.png")}
            alt=""
          />
        </div>
      )}
      <div
        css={css`
          display: flex;
          flex-grow: 1;
          width: 50%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 4rem;
          `}
        >
          <div
            css={css`
              font-size: 2.5em;
              font-weight: 800;
            `}
          >
            Welcome back
          </div>
          <div
            css={css`
              margin-top: 0.5em;
              font-size: 0.85em;
              font-weight: 400;
              color: #828282;
            `}
          >
            Are you on the guest list?
          </div>
        </div>
        <form
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 35%;
          `}
        >
          <Input
            placeholder="Email (Hint: admin)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />

          <Input
            placeholder="Password (Hint: admin)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />

          <Button onClick={handleSubmit}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
