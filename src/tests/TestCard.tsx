import { Box, Text, Divider, Flex, Badge } from "@chakra-ui/react";
import { TimeIcon, CalendarIcon } from "@chakra-ui/icons";
import React from "react";
import { Test } from "./types";

interface Props extends Test {
  onClick: (testId: string) => void;
}

function TestCard(props: Props) {
  const {
    onClick,
    testId,
    testTitle,
    languages,
    testCode,
    durationInMinutes,
    endDate,
    startDate,
  } = props;

  return (
    <Box
      bg="white"
      borderWidth={1}
      borderStyle="solid"
      px="4"
      py="5"
      rounded="md"
      width="sm"
      cursor="pointer"
      _hover={{ borderColor: "brand.200", boxShadow: "lg" }}
      onClick={() => onClick(testId)}
      tabIndex={0}
    >
      <Flex justify="space-between">
        <Badge px={2} py={1} colorScheme="gray">
          Not Taken
        </Badge>
        <Box display="inline-flex" alignItems="center">
          <TimeIcon width={4} mr={1} />
          <Text fontSize="xs" fontWeight="bold">
            {durationInMinutes}min
          </Text>
        </Box>
      </Flex>
      <Divider my={2} borderColor="gray.300" />
      <Text color="gray.700" fontSize="xs" fontWeight="bold">
        {testCode}
      </Text>
      <Text pb={2} fontSize="md">
        {testTitle}
      </Text>
      <Box mb={3}>
        <Text color="gray.500" fontSize="xs" fontWeight="medium">
          Language(s)
        </Text>
        <Flex py={1}>
          {languages.map((language) => (
            <Badge key={language} colorScheme="brand">{language}</Badge>
          ))}
        </Flex>
      </Box>
      <Flex justify="space-between">
        <Text flex="1">
          <Text
            flex="1"
            as="span"
            display="block"
            color="gray.500"
            fontSize="xs"
          >
            <CalendarIcon width={4} mr={1} />
            Start Date
          </Text>
          <Text as="span" fontSize="xs">
            {startDate}
          </Text>
        </Text>
        <Text flex="1">
          <Text as="span" display="block" color="gray.500" fontSize="xs">
            <CalendarIcon width={4} mr={1} />
            End Date
          </Text>
          <Text as="span" fontSize="xs">
            {endDate}
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default TestCard;
