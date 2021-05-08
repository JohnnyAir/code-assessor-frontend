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
        <Text fontWeight="semibold" color="gray.500" as="span">
          {data?.testCode}
        </Text>
        <Heading size="md">{data?.testTitle}</Heading>
        <Flex color="gray.500" alignItems="center">
          <Icon w="6" h="6" as={MdTimer} />
          <Text fontWeight="semibold" pl="1">
            {data?.durationInMinutes}minutes
          </Text>
        </Flex>
        {/* <Flex direction="column">
          <Text fontSize="sm" color="gray.500">
            Programing Language
          </Text>
          <Text fontSize="sm" color="gray.700">
            {data?.languages.join(",")}
          </Text>
        </Flex> */}
      </Stack>
      <Heading my="4" size="xs">
        Instructions
      </Heading>
      <Text>{data?.instructions}</Text>
    </>
  );
}

export default TestInfo;
