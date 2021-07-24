import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
//@ts-ignore
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

export const MarkDownContainer = styled(Box)(
  css({
    fontSize: "sm",
    "& p": {
      my: 2,
    },
    "& ul": {
      my: 2,
      pl: 10,
    },
    "& h1": {
      fontSize: "2xl",
      fontWeight: "bold",
    },
    "& h2": {
      fontSize: "xl",
      fontWeight: "bold",
    },
    "& h3": {
      fontSize: "lg",
      fontWeight: "bold",
    },
    "& h4": {
      fontSize: "md",
      fontWeight: "bold",
    },
    "& h5": {
      fontSize: "sm",
      fontWeight: "bold",
    },
    "& h6": {
      fontSize: "xs",
      fontWeight: "bold",
    },
    "& blockquote": {
      my: 2,
      mx: 8,
    },
    "& code": {
      fontSize: "xs",
      bg: "brand.100",
      color: "brand.900",
      px: 1,
      py: 1,
      borderRadius: 4,
    },
    "& table th, & table td ": {
      px: 2,
      py: 2,
    },
    "& table": {
      textAlign: "left",
      my: 4,
      px: 2,
    },
    "& table th": {
      fontSize: "xs",
      borderBottomWidth: 2,
      borderBottomColor: "brand.500",
      borderBottomStyle: "solid",
      textTransform: "uppercase",
      fontWeight: "700",
    },
    "& table tbody tr:nth-of-type(odd)": {
      bg: "brand.50",
    },
  })
);

export const MarkDownEditorStyle = styled(Box)`
  height: 100%;
  & .rc-md-editor {
    height: 100%;
  }
  section.sec-md {
    border-right-width: 1px;
    border-right-color: ${themeGet("color.gray.400")};
  }
`;
