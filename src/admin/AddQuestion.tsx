import React from "react";
import FormInput from "../components/Form";
import { Box, Stack, Heading, Textarea } from "@chakra-ui/react";
import DateTimePicker from "../components/DateTimePicker";

interface Props {}

function AddQuestion(props: Props) {
  // const {} = props;

  return (
    <Box>
      <Heading size="sm" mb={4}>
        Add Question
      </Heading>

    </Box>
  );
}

export default AddQuestion;
