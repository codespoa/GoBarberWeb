import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

import ImageLogo from "../../assets/Logo.svg";

import { Container, Content, Image } from "./style";

const Login = () => {
  return (
    <Container>
      <Content>
        <img src={ImageLogo} alt="Go Braber" />

        <form>
          <h1>Get Login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Button>Login</Button>
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
