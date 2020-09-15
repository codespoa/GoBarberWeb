import styled from "styled-components";
import { shade } from "polished";

import signInBackground from "../../assets/background-signup.png";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    margin-top: 80px;

    h1 {
      color: #f4ede8;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  > a {
    color: #f4ede8;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    margin-top: 80px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, "#F4EDE8")};
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
