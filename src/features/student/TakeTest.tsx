import React from "react";
import logo from "images/logo.png";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { CheckCircleIcon, TimeIcon } from "@chakra-ui/icons";
import CodeEditor from "../code-editor/CodeEditor";
import { lang, langModeValue } from "../code-editor/lang";
import MarkDownPreview from "../markdown";
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
import { getSearchParam } from "lib/helpers";

function TakeTest() {
  const { testId } = useParams<{ testId: string }>();
  const { search } = useLocation();
  const questionNumber = parseInt(getSearchParam(search, "q") || "1");

  return (
    <>
      <Header />
      <Grid
        position="relative"
        templateColumns="50px auto 760px"
        height="calc(100vh - 48px)"
      >
        <QuestionNumbersList questionNumber={questionNumber} />
        <QuestionView questionNumber={questionNumber} />
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

function QuestionNumbersList({ questionNumber }: { questionNumber: number }) {
  const history = useHistory();
  return (
    <Box width="full" bg="brand.900" py={12} height="calc(100vh - 48px)">
      <Center>
        <Stack
          textAlign="center"
          w="full"
          spacing={2}
          sx={{ "& .active": { bg: "brand.700" } }}
        >
          {[1, 2, 3, 4].map((number) => (
            <Heading
              className={questionNumber === number ? "active" : ""}
              py={4}
              key={number}
              cursor="pointer"
              size="md"
              color="white"
              _hover={{ bg: "brand.700" }}
              onClick={() =>
                history.push({
                  pathname: history.location.pathname,
                  search: `q=${number}`,
                })
              }
            >
              {number}
            </Heading>
          ))}
        </Stack>
      </Center>
    </Box>
  );
}

function Header() {

  // const timer = 

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

function QuestionView({ questionNumber }: { questionNumber: number }) {
  return (
    <Box width="full" height="calc(100vh - 48px)">
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
          Question {questionNumber}
        </Text>
      </Flex>
      <Box
        height="calc(100% - 2.5rem)"
        width="full"
        px={4}
        py={2}
        overflow="auto"
      >
        <MarkDownPreview str={`### Question ${questionNumber} Goes Here `}/>
      </Box>
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
            <option key={langauge} value={langauge}>
              {langauge}
            </option>
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
