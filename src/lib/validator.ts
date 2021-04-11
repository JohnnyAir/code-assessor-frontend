import { string } from "yup";

const passwordMinLength = 6;

export const ERROR_MESSAGE = {
  SHORT_PASSWORD: "Password too short!",
  REQUIRED: "This field is required!",
  INVALID_EMAIL: "Invalid email",
  INVALID_PHONE_NUMBER: "Phone number is invalid!",
};

export const fieldSchema = {
  password: string()
    .min(passwordMinLength, ERROR_MESSAGE.SHORT_PASSWORD)
    .required(ERROR_MESSAGE.REQUIRED),

  email: string()
    .email(ERROR_MESSAGE.INVALID_EMAIL)
    .required(ERROR_MESSAGE.REQUIRED),

  optionalEmail: string().email(ERROR_MESSAGE.INVALID_EMAIL),

  requiredString: string().required(ERROR_MESSAGE.REQUIRED),

  optionalString: string(),
};
