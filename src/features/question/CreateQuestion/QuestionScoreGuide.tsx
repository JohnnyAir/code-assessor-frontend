import React, { FC } from "react";
import { FormInput, FormRow } from "../../shared/components/Form";
import { Box, Heading, Text, Select } from "@chakra-ui/react";
import { FormStepControls } from "features/shared/types";

interface QuestionScoreGuideProps extends FormStepControls {

}

const QuestionScoreGuide: FC<QuestionScoreGuideProps> = ({
  goToNextStep,
  goToPreviousStep
}) => {
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

export default QuestionScoreGuide;
