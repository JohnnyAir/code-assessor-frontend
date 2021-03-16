import React from "react";
import FormInput from "../components/FormInput";
import { Box, Stack, Heading } from "@chakra-ui/react";
import DateTimePicker from "../components/DateTimePicker";

interface Props {}

function CreateTestForm(props: Props) {
  // const {} = props;

  return (
    <Box maxW="4xl" m="auto">
      <Heading size="sm" mb={4}>
        Setup New Test
      </Heading>
      <form>
        <Stack spacing={4}>
          <Stack direction={["column", null, "row"]} spacing={4}>
            <FormInput label="Test Code" placeholder="Enter course code" />
            <FormInput
              label="Test Title"
              placeholder="Enter title. eg Advanced Java Test"
            />
          </Stack>
          <Stack direction={["column", null, "row"]} spacing={4}>
            <DateTimePicker />
            <FormInput
              label="Test Title"
              placeholder="Enter title. eg Advanced Java Test"
            />
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default CreateTestForm;
