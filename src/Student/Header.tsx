import React from "react";
import { chakra, Flex, Box, Image, Text, HStack } from "@chakra-ui/react";
import { ReactComponent as Logout } from "images/exit.svg";
import logo from "images/logo.png";

export default function Header() {
  return (
    <chakra.header
      height={14}
      borderBottom={1}
      borderStyle="solid"
      borderColor="brand.200"
      overflow="hidden"
      pl={12}
      pr={12}
    >
      <Flex justify="space-between">
        <Image src={logo} height={14} />
        <HStack>
          <Text>Logout</Text>
          <Box fill="brand.400">
            <Logout width="18px" height="18px" />
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
