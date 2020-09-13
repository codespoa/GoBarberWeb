import React from "react";
import { FiLogIn } from "react-icons/fi";

import ImageLogo from "../../assets/Logo.svg";

import { Container, Content, Image } from "./style";

const Login = () => {
  return (
    <Container>
      <Content>
        <img src={ImageLogo} alt="Go Braber" />

        <form>
          <h1>Get Login</h1>

          <input placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <a href="teste">Forgot Password</a>
        </form>

        <a href="teste">
          <FiLogIn />
          Create Accont
        </a>
      </Content>

      <Image />
    </Container>
  );
};

export default Login;
