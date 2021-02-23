import React from "react";
import {
  Box,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Alert,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import logo from "../images/logo.png";
import { useLogin } from "./hooks";

interface ValidationState {
  loginId: boolean;
  password: boolean;
  [key: string]: string | boolean;
}

const initialFormValidationState = {
  loginId: false,
  password: false,
};

function Login() {
  const [loginId, setLoginId] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [validationState, setValidationState] = React.useState<ValidationState>(
    initialFormValidationState
  );
  const { login, error, isLoading } = useLogin();

  const setFormData = (handler: (value: string) => void) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      handler(value);
      if (validationState[name] && value)
        setValidationState((prev) => ({ ...prev, [name]: false }));
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginId || !password) {
      return setValidationState({ loginId: !loginId, password: !password });
    }
    login({
      username: loginId,
      password: password,
    });
  };

  return (
    <>
      <Box px={20}>
        <Image flex="1" src={logo} height={20} />
      </Box>
      <Flex pt={[6, null, 10]} justify="center">
        <Box width={["full", null, "96"]} px={6}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription fontSize="sm">{error.message}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} py={10}>
              <FormControl isInvalid={validationState.loginId}>
                <FormLabel>Login Id</FormLabel>
                <Input
                  value={loginId}
                  onChange={setFormData(setLoginId)}
                  size="lg"
                  placeholder="Your Login Id"
                  type="text"
                  name="loginId"
                />
              </FormControl>
              <FormControl isInvalid={validationState.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={setFormData(setPassword)}
                  size="lg"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </FormControl>
            </Stack>
            <Button
              isLoading={isLoading}
              type="submit"
              width="full"
              size="lg"
              colorScheme="brand"
            >
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Login;
