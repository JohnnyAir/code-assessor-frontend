import { Box, Text, Divider, Flex, Badge } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import React from "react";

function QuestionCard() {
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
      tabIndex={0}
    >
      <Flex justify="space-between">
        <Badge px={2} py={1} colorScheme="green">
          Easy
        </Badge>
        <Box display="inline-flex" alignItems="center">
          <TimeIcon width={4} mr={1} />
          <Text fontSize="xs" fontWeight="bold">
            60min
          </Text>
        </Box>
      </Flex>
      <Divider my={2} borderColor="gray.300" />
      <Text color="gray.700" fontSize="xs" fontWeight="bold">
        #123
      </Text>
      <Text pb={2} fontSize="md">
        Sum Of Even Numbers
      </Text>
      <Box mb={3}>
        <Text color="gray.500" fontSize="xs" fontWeight="medium">
          Language(s)
        </Text>
        <Flex py={1}>
          <Badge colorScheme="brand">JAVA</Badge>
          <Badge colorScheme="brand">C++</Badge>
        </Flex>
      </Box>
    </Box>
  );
}

export default QuestionCard;
