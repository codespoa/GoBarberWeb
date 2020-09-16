import React, { useCallback, useRef } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { useAuth } from "../../hooks/AuthContext";
import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import ImageLogo from "../../assets/Logo.svg";

import { Container, Content, Image } from "./style";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().required("Email is required").email(),
          password: Yup.string().required("Password is required"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={ImageLogo} alt="Go Braber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Get Login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
          <a href="teste">Forgot Password</a>
        </Form>

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
