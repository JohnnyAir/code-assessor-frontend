import React from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Button,
  Alert,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import logo from "../images/logo.png";
import { useAuth } from "./AuthContext";
import { Formik } from "formik";
import { FormField } from "components/Form";
import { LoginRequest } from "./auth.types";

function Login() {
  const { login } = useAuth();
  return (
    <>
      <Box px={20}>
        <Image flex="1" src={logo} height={20} />
      </Box>
      <Flex pt={[6, null, 10]} justify="center">
        <Box width={["full", null, "96"]} px={6}>
          <LoginForm login={login} />
        </Box>
      </Flex>
    </>
  );
}

type LoginFormProps = {
  login: (data: LoginRequest) => Promise<void>;
};

function LoginForm(props: LoginFormProps) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(data, { setStatus }) => {
        props.login(data).catch((error) => {
          setStatus(error.message);
        });
      }}
    >
      {({ isSubmitting, handleSubmit, status }) => (
        <form onSubmit={handleSubmit}>
          {status && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription fontSize="sm">{status}</AlertDescription>
            </Alert>
          )}
          <Stack spacing={3} py={10}>
            <FormField
              size="lg"
              placeholder="Your Username"
              name="username"
              label="Login Id"
            />
            <FormField
              size="lg"
              name="password"
              placeholder="Your Password"
              label="Password"
            />
          </Stack>
          <Button
            isLoading={isSubmitting}
            type="submit"
            width="full"
            size="lg"
            colorScheme="brand"
          >
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default Login;
