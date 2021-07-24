import React, { FC } from "react";
import { FormInput } from "../../shared/components/Form";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import { FormStepControls } from "features/shared/types";

interface QuestionInfoFormProps extends FormStepControls {}

const QuestionInfoForm: FC<QuestionInfoFormProps> = ({
  goToNextStep,
  goToPreviousStep,
}) => {
  return (
    <form>
      <Box mb={12}>
        <Heading size="md">New Question</Heading>
        <Text>provide basic information on question</Text>
      </Box>
      <Stack spacing={4}>
        <FormInput
          label="Question Title"
          placeholder="E.g Sum of two numbers "
        />
        <FormInput
          as={Select}
          label="Difficulty Level"
          placeholder="choose difficulty level"
        />
        <FormInput
          as={Select}
          label="Programming Langauage"
          placeholder="select programming language"
        />
        <FormInput label="Category Tags" placeholder="" />
      </Stack>
      <Flex justify="space-between" my="6">
        <Button variant="outline" onClick={goToPreviousStep}>
          Previous
        </Button>
        <Button colorScheme="brand" onClick={goToNextStep}>
          Next
        </Button>
      </Flex>
    </form>
  );
};

export default QuestionInfoForm;
