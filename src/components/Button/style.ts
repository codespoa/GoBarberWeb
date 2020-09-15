import styled from "styled-components";
import { shade } from 'polished';

export const ButtonStyle = styled.button`
  background: #ff9000;
  border-radius: 10px;
  margin-top: 16px;
  width: 100%;
  height: 56px;
  color: #312e38;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  transition: background-color linear 0.2s;

  &:hover {
    background: ${shade(0.2, "#ff9000")};
  }
`;
