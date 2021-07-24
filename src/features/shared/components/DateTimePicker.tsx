import FormInput, { FormInputProps } from "./Form";
import TimePicker from "./TimePicker";
import React from "react";

const rightItemProps = {
  p: 0,
  w: "40%",
};

function DateTimePicker(props: FormInputProps) {
  return (
    <FormInput
      {...props}
      type="date"
      rightItemProps={rightItemProps}
      rightItem={<TimePicker />}
    />
  );
}

export default DateTimePicker;
