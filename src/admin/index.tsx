import React from "react";
import { chakra, Flex, Box, Image, Text, HStack, Heading, Button, Icon } from "@chakra-ui/react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import TestCard from "../components/TestCard";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateTestForm from "./CreateTestForm";

function Index() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex
        direction="column"
        justify="space-between"
        h={40}
        w="full"
        px={[4, 16]}
        bg="brand.900"
      >
        <Flex>
          <Image src={logo} height={24} />
          <Flex justify="flex-end" flex="1" pt={6}>
            <Box
              borderWidth="2px"
              borderColor="brand.700"
              textAlign="center"
              w={8}
              h={8}
              bg="brand.500"
              rounded="full"
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              J
            </Box>
          </Flex>
        </Flex>
        <chakra.nav>
          <HStack
            spacing={4}
            fontWeight="medium"
            color="brand.200"
            sx={{
              "& .active ": {
                color: "white",
                borderBottomWidth: 2,
                borderBottomColor: "white",
              },
              p: { px: "4" },
            }}
          >
            <NavLink exact to="/admin">
              <Text>Tests</Text>
            </NavLink>
            <NavLink to="/admin/question-pool">
              <Text>Question Pool</Text>
            </NavLink>
          </HStack>
        </chakra.nav>
      </Flex>
      <Box px={[4, 16]} py={8}>
        {false && (
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
            <TestCard
              testId="25102011-3694-4fef-a1b6-bd79ee8b81ae"
              testTitle="Into to Object-Oriented Programing in Java"
              testCode="COM412"
              languages={["JAVA"]}
              startDate="12/02/2020 12:30pm"
              endDate="12/02/2020 19:30pm"
              durationInMinutes={60}
              onClick={() => {}}
            />
          </>
        )}
        <CreateTestForm />
      </Box>
    </Box>
  );
}

export default Index;
