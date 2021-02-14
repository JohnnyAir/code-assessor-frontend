import React from "react";
import { Box, Flex, Image, FormControl, FormLabel, Input, Stack, Button, Alert, AlertDescription, AlertIcon, CloseButton } from "@chakra-ui/react";
import logo from "../images/logo.png";

interface ValidationState {
  [key: string]: string | boolean;
  loginId: boolean;
  password: boolean;
  formError: string;
}

function Login() {
  const [loginId, setLoginId] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [validationState, setValidationState] = React.useState<ValidationState>(
    {
      loginId: false,
      password: false,
      formError: "",
    }
  );

  const setFormData = (handler: (value: string) => any) => {
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
      return setValidationState((prev) => ({
        ...prev,
        loginId: !loginId,
        password: !password,
      }));
    }
  };

  return (
    <>
      <Box px={20}>
        <Image flex="1" src={logo} height={20} />
      </Box>
      <Flex pt={[6, null, 10]} justify="center">
        <Box width={["full", null, "96"]} px={6}>
          {validationState.formError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription fontSize="sm">
                {validationState.formError}
              </AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} py={10}>
              <FormControl isInvalid={validationState.loginId}>
                <FormLabel>Matric Number</FormLabel>
                <Input
                  value={loginId}
                  onChange={setFormData(setLoginId)}
                  size="lg"
                  placeholder="Matric Number"
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
            <Button type="submit" width="full" size="lg" colorScheme="brand">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Login;