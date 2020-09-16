import styled, { css } from "styled-components";

interface ToastProps {
  type?: "success" | "error" | "info";
  hasDescription: boolean;
}

const ToastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,

  error: css`
    background-color: #fddede;
    color: #c53030;
  `,

  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  display: flex;
  width: 360px;
  position: relative;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${(props) => ToastTypeVariations[props.type || "info"]}

  > svg {
    margin: 4px 12px 0 0;
  }

  & + div {
    margin-top: 8px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 10px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
