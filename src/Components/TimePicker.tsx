import { HStack, Input, Select } from "@chakra-ui/react";
import React from "react";

interface Props {}

function TimePicker(props: Props) {
  const {} = props;

  return (
    <HStack>
      <Input placeholder="HH" />
      <Input placeholder="MM" />
      <Select value="AM">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </Select>
    </HStack>
  );
}

export default TimePicker;
