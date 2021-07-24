import React, { FC } from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import MarkdownEditor from "../../markdown/MarkdownEditor";
import { FormStepControls } from "features/shared/types";

interface QuestionDescriptionEditorProps extends FormStepControls {}

const QuestionDescriptionEditor: FC<QuestionDescriptionEditorProps> = ({
  goToNextStep,
  goToPreviousStep,
}) => {
  return (
    <>
      <Box mb={4}>
        <Heading size="md">Question</Heading>
        <Text>Enter question text</Text>
      </Box>
      <Box h="500px">
        <MarkdownEditor />
      </Box>
      <Flex justify="space-between" mt="8">
        <Button variant="outline" onClick={goToPreviousStep}>
          Previous
        </Button>
        <Button colorScheme="brand" onClick={goToNextStep}>
          Next
        </Button>
      </Flex>
    </>
  );
};

export default QuestionDescriptionEditor;
