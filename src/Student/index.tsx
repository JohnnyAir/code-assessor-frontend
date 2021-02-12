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
} from "@chakra-ui/react";
import logo from "../images/logo.png";
import { ReactComponent as Logout } from "../images/exit.svg";
import profile from "../images/user-profile.png";
import TestCard from "../Components/TestCard";

interface Props {}

function Index(props: Props) {
  return (
    <>
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
      <Box as="main" minH="calc(100vh - 56px)" pt={12} pl={12} pr={12}>
        <Grid templateColumns="2fr 5fr">
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
                Ekunola John Oluwatobi
              </Text>
              <Text>F/HD/18/3210120</Text>
              <Text>Computer Technology</Text>
              <Text>HND 2</Text>
            </Flex>
          </Stack>
          <Box pl={6}>
            <Heading mb={3} size="md">
              Test Portal
            </Heading>
            <Text fontSize="sm">Your active tests</Text>
            <Grid
              mt={5}
              width="full"
              templateColumns="repeat(auto-fill, minmax(28rem, 1fr))"
              gap={2}
              gridAutoRows="minmax(12rem, auto)"
            >
              <TestCard></TestCard>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Index;
