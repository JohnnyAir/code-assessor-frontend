import React from "react";
import { FormInput, FormRow } from "../shared/components/Form";
import {
  Grid,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import FormStepNavigation from "../shared/components/StepNavigation";
import MarkdownEditor from "features/markdown/MarkdownEditor";

interface Props {}

function AddQuestion(props: Props) {
  // const {} = props;

  return (
    <Grid templateColumns="18rem auto">
      <Box h="calc(100vh - 14rem)">
        <FormStepNavigation
          headerTitle="Create Question"
          steps={["Basic Info", "Question", "Score Guide"]}
          activeStepNumber={3}
        />
      </Box>
      <Box py="12" px="16">
        <CriteriaForm />
      </Box>
    </Grid>
  );
}

export default AddQuestion;

const FirstForm = () => {
  return (
    <form>
      <Box mb={12}>
        <Heading size="md">My Title</Heading>
        <Text>A simple subtitle</Text>
      </Box>
      <Stack spacing={4}>
        <FormInput
          label="Question Title"
          placeholder="E.g Sum of two numbers "
        />
        <FormInput label="Dificulty Level" placeholder="Select " />
        <FormInput label="Language" placeholder="Select Langauage" />
        <FormInput label="Category Tags" placeholder="" />
      </Stack>
      <Flex justify="space-between" my="6">
        <Button variant="outline">Previous</Button>
        <Button colorScheme="brand">Next</Button>
      </Flex>
    </form>
  );
};

const EditorForm = () => {
  return (
    <>
      <Box mb={4}>
        <Heading size="md">My Title</Heading>
        <Text>A simple subtitle</Text>
      </Box>
      <Box h="500px">
        <MarkdownEditor />
      </Box>
      <Flex justify="space-between" mt="8">
        <Button variant="outline">Previous</Button>
        <Button colorScheme="brand">Next</Button>
      </Flex>
    </>
  );
};

const CriteriaForm = () => {
  return (
    <Box p={4} minH="20" w="full" bg="white">
      <Heading mb={3} size="sm">
        Spec
      </Heading>
      <FormRow>
        <FormInput
          label="Guide Description"
          placeholder="E.g correctly sum two numbers"
        />
        <FormInput
          as={Select}
          label="Test Template"
          placeholder="Select test template"
        />
      </FormRow>
      <Box mb={6} mt={12}>
        <Text color="gray.400" align="center">
          select a test template to create a spec
        </Text>
      </Box>
    </Box>
  );
};
