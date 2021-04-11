import { Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

interface Props {}

const InputStyle = {
  fontSize: "90%",
  flex: "1",
};

function TimePicker(props: Props) {
  return (
    <Flex w="100%" spacing="0">
      <Input {...InputStyle} placeholder="HH" />
      <Input {...InputStyle} placeholder="MM" />
      <Select {...InputStyle}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </Select>
    </Flex>
  );
}

export default TimePicker;
