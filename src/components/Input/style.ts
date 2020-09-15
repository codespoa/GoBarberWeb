import styled, { css } from "styled-components";

import Tooltip from "../../components/Tooltip";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const InputStyle = styled.div<InputProps>`
  background: #232129;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  max-width: 300px;
  padding: 0 16px;
  border: 2px solid #232129;
  display: flex;
  align-items: center;
  color: #666360;

  input {
    color: #f4ede8;
    background-color: transparent;
    flex: 1;
    height: 56px;

    &::placeholder {
      color: #666360;
      background-color: transparent;
    }

    &:focus {
      background-color: transparent;
    }

    & + input {
      margin-top: 8px;
    }
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  svg {
    margin-right: 15px;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
