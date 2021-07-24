import React from "react";
import { Grid, Button, Flex, Icon, Heading } from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

function Questions(props: Props) {
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
            onClick={() => props.history.push("/admin/create-question")}
          >
            Create Question
          </Button>
        </Flex>
      </Flex>
      <Grid
        mt={5}
        width="full"
        templateColumns="repeat(auto-fill, minmax(28rem, 1fr))"
        gap={2}
        gridAutoRows="minmax(12rem, auto)"
        {...props}
      >
        <QuestionCard />
        <QuestionCard />
      </Grid>
    </>
  );
}

export default Questions;
