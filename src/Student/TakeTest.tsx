import React from "react";
import {
  chakra,
  Flex,
  Button,
  Image,
  Box,
  Text,
  Grid,
  Stack,
  Heading,
  Divider,
  Center,
  Select,
} from "@chakra-ui/react";
import logo from "../images/logo.png";
import { CheckCircleIcon, TimeIcon } from "@chakra-ui/icons";
import CodeEditor from "../Components/CodeEditor/CodeEditor";
import { lang, langModeValue } from "../Components/CodeEditor/lang";
import MarkDownPreview from "../Components/Markdown";
import { question } from "../data/question";

function TakeTest() {
  return (
    <>
      <Header />
      <Grid position="relative" templateColumns="50px auto 760px">
        <Box width="full" bg="brand.900" py={12} height="calc(100vh - 48px)">
          <Center>
            <Stack spacing={8}>
              {[1, 2, 3, 4].map((number) => (
                <Heading cursor="pointer" size="md" color="white">
                  {number}
                </Heading>
              ))}
            </Stack>
          </Center>
        </Box>
        <QuestionView />
        <Divider
          position="absolute"
          right="761px"
          borderColor="brand.200"
          size="1px"
          orientation="vertical"
          cursor="col-resize"
          sx={{ "&:hover": { borderLeftWidth: "2px" } }}
        />
        <TestEditor />
      </Grid>
    </>
  );
}

function Header() {
  return (
    <chakra.header
      height={12}
      borderBottom={1}
      borderStyle="solid"
      borderColor="brand.200"
      overflow="hidden"
      pl={12}
      pr={12}
    >
      <Flex justify="space-between">
        <Box flex="1">
          <Image flex="1" src={logo} height={12} />
        </Box>
        <Flex flex="1" align="center" justify="center">
          <TimeIcon w={4} mr={2} />
          <Text>1h 30m</Text>
        </Flex>
        <Flex flex="1" align="center" justify="flex-end">
          <Button colorScheme="brand" leftIcon={<CheckCircleIcon />} size="sm">
            Submit
          </Button>
        </Flex>
      </Flex>
    </chakra.header>
  );
}

function QuestionView() {
  return (
    <Box width="full">
      <Flex
        align="center"
        bg="gray.200"
        borderBottomWidth={1}
        borderBottomColor="brand.200"
        height={10}
        width="full"
        px={2}
      >
        <Text cursor="pointer" fontSize="md">
          Question 1
        </Text>
      </Flex>
      <MarkDownPreview str={question.questionText} />
    </Box>
  );
}

function TestEditor() {
  const [languageMode, setLaguageMode] = React.useState<langModeValue>(
    lang.mode["Java"]
  );
  return (
    <Box width="full">
      <Flex
        align="center"
        bg="gray.200"
        borderBottomWidth={1}
        borderBottomColor="brand.200"
        height={10}
        width="full"
        px={2}
      >
        <Select
          rounded="sm"
          size="sm"
          fontWeight="bold"
          cursor="pointer"
          borderRadius={2}
          borderStyle="solid"
          borderWidth={1}
          width={24}
          onChange={(e) => setLaguageMode(lang.mode[e.target.value])}
        >
          {lang.languages.map((langauge) => (
            <option value={langauge}>{langauge}</option>
          ))}
        </Select>
      </Flex>
      <CodeEditor
        language={languageMode.language}
        options={{ mode: languageMode }}
        defaultValue={"//Write your code here \n"}
      />
    </Box>
  );
}

export default TakeTest;