import React from "react";
import { Flex, Heading, Button, Icon } from "@chakra-ui/react";
import TestsCardList from "../../tests/TestCardList";
import { IoIosAddCircleOutline } from "react-icons/io";

interface Props {}

function TestsList(props: Props) {
  return (
    <>
      <Flex>
        <Heading size="sm" mb={4}>
          All Tests
        </Heading>
        <Flex flex="1" justify="flex-end">
          <Button
            leftIcon={<Icon as={IoIosAddCircleOutline} w={5} h={5} />}
            colorScheme="brand"
            size="sm"
          >
            New Test
          </Button>
        </Flex>
      </Flex>
      <TestsCardList onClick={()=>{}}  />
    </>
  );
}

export default TestsList;
