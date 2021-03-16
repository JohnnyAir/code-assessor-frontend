import React, { ReactNode } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormLabel,
  InputProps,
  FormControl,
  InputAddonProps,
} from "@chakra-ui/react";

interface Props extends InputProps {
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  label?: string;
  leftItemProps?: InputAddonProps;
  rightItemProps?: InputAddonProps;
}

function FormInput(props: Props) {
  const {
    leftItem,
    rightItem,
    leftItemProps,
    rightItemProps,
    label,
    isInvalid,
    ...inputProps
  } = props;
  return (
    <FormControl isInvalid={isInvalid}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {leftItem && <InputLeftAddon {...leftItemProps} children={leftItem} />}
        <Input size="md" colorScheme="brand" {...inputProps} />
        {rightItem && (
          <InputRightAddon {...rightItemProps} children={rightItem} />
        )}
      </InputGroup>
    </FormControl>
  );
}

export default FormInput;
