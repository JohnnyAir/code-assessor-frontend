import React from "react";
import { Spinner, Text, Flex, Icon, Heading, Stack } from "@chakra-ui/react";
import { MdTimer } from "react-icons/md";
import { useTest } from "./test.api";

interface Props {
  id: string;
}

function TestInfo(props: Props) {
  const { data, isError, isLoading } = useTest(props.id);
  if (isLoading) return <Spinner />;
  if (isError) return <Text children="An Error Occured" />;
  return (
    <>
      <Stack spacing={2}>
        <Heading size="md">
          <Text letterSpacing="0.3px" color="gray.500" as="span">
            {data?.testCode}
          </Text>
          : {data?.testTitle}
        </Heading>
        <Flex color="gray.500" alignItems="center">
          <Icon w="1.3" h="1.3" as={MdTimer} />
          <Text pl="3">{data?.durationInMinutes}</Text>
        </Flex>
        <Flex direction="column">
          <Text fontSize="sm" color="gray.500">
            Programing Language
          </Text>
          <Text fontSize="sm" color="gray.700">
            {data?.languages.join(",")}
          </Text>
        </Flex>
      </Stack>
      <Heading my="4" size="xs">
        Instructions
      </Heading>
      <Text>{data?.instructions}</Text>
    </>
  );
}

export default TestInfo;
