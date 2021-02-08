import { Box, Text, Divider, Flex, Badge } from "@chakra-ui/react";
import { TimeIcon, CalendarIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {}

function TestCard(props: Props) {
  // const {} = props

  return (
    <Box
      borderWidth={1}
      borderStyle="solid"
      px="4"
      py="5"
      rounded="md"
      width="sm"
      cursor="pointer"
      sx={{
        "&:hover": {
          borderColor: "brand.200",
          boxShadow:"lg"
        },
      }}
    >
      <Flex justify="space-between">
        <Badge px={2} py={1} colorScheme="gray">
          Not Taken
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
        COM412
      </Text>
      <Text pb={2} fontSize="md">
        Into to Object-Oriented Programing in Java
      </Text>
      <Box mb={3}>
        <Text color="gray.500" fontSize="xs" fontWeight="medium">
          Language(s)
        </Text>
        <Flex py={1}>
          <Badge colorScheme="brand">Java</Badge>
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
            12/02/2020 12:30pm
          </Text>
        </Text>
        <Text flex="1">
          <Text as="span" display="block" color="gray.500" fontSize="xs">
            <CalendarIcon width={4} mr={1} />
            End Date
          </Text>
          <Text as="span" fontSize="xs">
            12/02/2020 12:30pm
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default TestCard;
