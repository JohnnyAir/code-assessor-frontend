import React, { ReactNode } from "react";
import { useField } from "formik";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormLabel,
  InputProps,
  Stack,
  FormControl,
  InputAddonProps,
  useStyleConfig,
  FormLabelProps,
  StackProps,
  As,
} from "@chakra-ui/react";

export interface FormInputProps extends InputProps {
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  label?: string;
  leftItemProps?: InputAddonProps;
  rightItemProps?: InputAddonProps;
}

function StyledInput(props: InputProps) {
  const { variant, size, colorScheme, ...inputProps } = props;
  const styles = useStyleConfig("FormInput", {
    variant,
    size,
    colorScheme,
  });

  return <Input sx={styles} {...inputProps} />;
}

function StyledLabel(props: FormLabelProps) {
  const { size, ...labelProps } = props;

  const styles = useStyleConfig("FormLabel", {
    size,
  });

  return <FormLabel sx={styles} {...labelProps} />;
}

export function FormInput(props: FormInputProps) {
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
      {label && <StyledLabel size={inputProps.size}>{label}</StyledLabel>}
      <InputGroup>
        {leftItem && <InputLeftAddon {...leftItemProps} children={leftItem} />}
        <StyledInput {...inputProps} />
        {rightItem && (
          <InputRightAddon {...rightItemProps} children={rightItem} />
        )}
      </InputGroup>
    </FormControl>
  );
}

FormInput.defaultProps = {
  size: "md",
  colorScheme: "brand",
};

export const FormRow: React.FC = (props: StackProps) => {
  return <Stack direction={["column", null, "row"]} spacing={4} {...props} />;
};

// hook field with formik
interface FormFieldProps extends FormInputProps {
  as?: As;
  name: string;
}

export const FormField: React.FC<FormFieldProps> = ({ as, children, ...props }) => {
  const [field, meta] = useField(props.name);
  const newProps = {
    ...field,
    ...props,
    isInvalid: meta.touched && meta.error,
    value: meta.value,
    error: meta.error,
  };

  if (children) {
    const child = React.Children.only(children);
    if (React.isValidElement(child)) {
      return React.cloneElement(child, newProps);
    }
  }

  let FieldComponent = as;

  if(FieldComponent === undefined) return null;

  if (React.isValidElement(FieldComponent))
    return React.cloneElement(FieldComponent, newProps);
  return React.createElement(FieldComponent, newProps);
};

FormField.defaultProps = {
  as: FormInput,
};

export default FormInput;
