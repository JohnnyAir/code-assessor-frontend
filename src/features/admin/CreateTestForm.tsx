import React from "react";
import { FormInput, FormRow } from "../shared/components/Form";
import { Box, Stack, Heading, Textarea } from "@chakra-ui/react";
import DateTimePicker from "../shared/components/DateTimePicker";

interface Props {}

function CreateTestForm(props: Props) {
  // const {} = props;

  return (
    <Box w="full">
      <Heading size="sm" mb={4}>
        Setup New Test
      </Heading>
      <form>
        <Stack spacing={4}>
          <FormRow>
            <FormInput label="Course Code" placeholder="Enter course code" />
            <FormInput
              label="Course Title"
              placeholder="Enter title. eg Advanced Java Test"
            />
          </FormRow>
          <FormRow>
            <DateTimePicker label="Date From" />
            <DateTimePicker label="Date To" />
          </FormRow>
          <FormRow>
            <FormInput label="Language" placeholder="Select Langauage" />
            <FormInput
              label="Maximum Question Attempt"
              placeholder="Enter title. eg Advanced Java Test"
            />
          </FormRow>
          <FormRow>
            <FormInput as={Textarea} label="Instructions" placeholder="" />
          </FormRow>
        </Stack>
      </form>
    </Box>
  );
}

export default CreateTestForm;
