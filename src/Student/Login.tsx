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
} from "@chakra-ui/react";
import logo from "../images/logo.png";

interface Props {}

function Login(props: Props) {
  // const {} = props

  return (
    <>
      <Box px={20}>
        <Image flex="1" src={logo} height={20} />
      </Box>
      <Flex pt={[6, null, 10]} justify="center">
        <Box width={["full", null, "96"]} px={6}>
          <form>
            <Stack spacing={3} py={10}>
              <FormControl>
                <FormLabel>Matric Number</FormLabel>
                <Input size="lg" placeholder="Matric Number" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input size="lg" placeholder="Password" type="password" />
              </FormControl>
            </Stack>
            <Button width="full"size="lg" colorScheme="brand">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Login;
