import React, { ButtonHTMLAttributes } from "react";

import { ButtonStyle } from "./style";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonElementProps> = ({ children, ...rest }) => (
  <ButtonStyle type="button" { ...rest} >
      {children}
    </ButtonStyle>
);

export default Button;
