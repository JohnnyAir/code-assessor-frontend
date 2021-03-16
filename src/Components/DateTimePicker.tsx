import { HStack } from "@chakra-ui/react";
import FormInput from "./FormInput";
import TimePicker from "./TimePicker";
import React from "react";

interface Props {}

function DateTimePicker(props: Props) {
  const {} = props;

  return (
    <HStack>
      <FormInput type="date" rightItemProps={{}} rightItem={<TimePicker />} />
    </HStack>
  );
}

export default DateTimePicker;
