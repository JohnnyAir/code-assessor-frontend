import React from "react";
import {
  chakra,
  Flex,
  Box,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import logo from "../images/logo.png";
import { NavLink, Route, Switch } from "react-router-dom";
import AddQuestion from "./AddQuestion";
import CreateTestForm from "./CreateTestForm";
import TestsList from "./TestsList";

function Index() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex
        direction="column"
        justify="space-between"
        h={40}
        w="full"
        px={[4, 32]}
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
      <Box px={[4, 32]} py={8}>
        <Switch>
          <Route exact path="/admin" component={TestsList} />
          <Route exact path="/admin/new/question" component={AddQuestion} />
          <Route exact path="/new/test" component={CreateTestForm} />
        </Switch>
      </Box>
    </Box>
  );
}

export default Index;
