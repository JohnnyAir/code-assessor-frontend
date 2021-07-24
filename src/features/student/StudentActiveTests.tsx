import React from "react";
import {
  Flex,
  Stack,
  Box,
  Image,
  Text,
  Center,
  Grid,
  Heading,
} from "@chakra-ui/react";
import profile from "images/user-profile.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "features/auth/AuthContext";
import Header from "./Header";
import TestCardList, { TestCardListGrid } from "tests/TestCardList";

function Index() {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <>
      <Header />
      <Box as="main" minH="calc(100vh - 56px)" pt={12} pl={12} pr={12}>
        <Grid templateColumns={["1fr", "2fr 5fr"]}>
          <Stack spacing={10}>
            <Center>
              <Image
                src={user?.avatar}
                w="3xs"
                h="3xs"
                borderWidth={1}
                borderRadius="full"
                borderStyle="solid"
              />
            </Center>
            <Flex direction="column" align="center">
              <Text fontSize="lg" fontWeight="bold">
                {user?.name}
              </Text>
              <Text>{user?.matricNumber}</Text>
              <Text>{user?.department}</Text>
              <Text>{user?.level}</Text>
            </Flex>
          </Stack>
          <Box pl={[0, 6]} py={["8", 0]}>
            <Heading mb={3} size="md">
              Active Tests
            </Heading>
            <Text fontSize="sm">Your active tests</Text>
            <TestCardListGrid>
              <TestCardList
                onClick={(id) => history.push(`/test/${id}/instructions`)}
              />
            </TestCardListGrid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Index;
