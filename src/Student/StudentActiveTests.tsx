import React from "react";
import {
  chakra,
  Flex,
  Stack,
  Box,
  Image,
  Text,
  HStack,
  Center,
  Grid,
  Heading,
  Alert,
  Spinner,
} from "@chakra-ui/react";
import logo from "images/logo.png";
import { ReactComponent as Logout } from "images/exit.svg";
import profile from "images/user-profile.png";
import TestCard from "components/TestCard";
import { getStudentTests } from "./StudentApi";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuth } from "auth/AuthContext";

function Index() {
  
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Box as="main" minH="calc(100vh - 56px)" pt={12} pl={12} pr={12}>
        <Grid templateColumns={["1fr", "2fr 5fr"]}>
          <Stack spacing={10}>
            <Center>
              <Image
                src={profile}
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
              <Text>{user?.username}</Text>
              <Text>{user?.department}</Text>
              <Text>{user?.level}</Text>
            </Flex>
          </Stack>
          <ActiveTests />
        </Grid>
      </Box>
    </>
  );
}

function Header() {
  return (
    <chakra.header
      height={14}
      borderBottom={1}
      borderStyle="solid"
      borderColor="brand.200"
      overflow="hidden"
      pl={12}
      pr={12}
    >
      <Flex justify="space-between">
        <Image src={logo} height={14} />
        <HStack>
          <Text>Logout</Text>
          <Box fill="brand.400">
            <Logout width="18px" height="18px" />
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}

function ActiveTests() {
  const history = useHistory();
  const { isLoading, isError, data } = useQuery("Tests", getStudentTests);

  return (
    <Box pl={[0, 6]} py={["8", 0]}>
      <Heading mb={3} size="md">
        Active Tests
      </Heading>
      <Text fontSize="sm">Your active tests</Text>
      {isLoading ? (
        <Spinner size="md" />
      ) : isError ? (
        <Alert status="error">
          Error loading tests. please reload page to try again
        </Alert>
      ) : (
        <Grid
          mt={5}
          width="full"
          templateColumns="repeat(auto-fill, minmax(28rem, 1fr))"
          gap={2}
          gridAutoRows="minmax(12rem, auto)"
        >
          {data && data.length ? (
            data.map((test) => (
              <TestCard
                key={test.testId}
                {...test}
                onClick={(id) => history.push(`/test/attempt/${id}?q=1`)}
              />
            ))
          ) : (
            <Text>You have no pending tests</Text>
          )}
        </Grid>
      )}
    </Box>
  );
}

export default Index;