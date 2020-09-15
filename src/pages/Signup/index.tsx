import React, { useCallback, useRef } from "react";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors"

import Input from "../../components/Input";
import Button from "../../components/Button";

import ImageLogo from "../../assets/Logo.svg";

import { Container, Content, Image } from "./style";

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email(),
        password: Yup.string().min(6, "Password is required"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Image />

      <Content>
        <img src={ImageLogo} alt="Go Braber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Get Account</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Create account</Button>
        </Form>

        <a href="teste">
          <FiArrowLeft />
          Back to Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
