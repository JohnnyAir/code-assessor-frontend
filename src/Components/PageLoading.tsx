import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

interface Props {}

function PageLoading(props: Props) {
  return (
    <Flex align="center" justify="center" width="full" h="100vh">
      <Spinner size="md" />
    </Flex>
  );
}

export default PageLoading;
