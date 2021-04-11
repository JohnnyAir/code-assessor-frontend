import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import Header from "./Header";
import { useRouteMatch } from "react-router";
import TestInfo from "tests/TestInfo";

function TestInstructions() {
  const { params } = useRouteMatch<{ id: string }>();

  return (
    <>
      <Header />
      <Box as="main" minH="calc(100vh - 56px)" pt={12} pl={12} pr={12}>
        <Box mx="auto" width="100%" px="2" maxW="5xl" h="60">
          <TestInfo id={params.id} />
          <Flex justifyContent="center" my="8">
            <Button colorScheme="brand" size="md">
              Start Test
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default TestInstructions;
