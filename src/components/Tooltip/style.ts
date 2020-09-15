import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    background-color: #ff9000;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    min-width: 160px;
    text-align: center;
    padding: 4px 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;

    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: "";
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
