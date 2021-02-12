import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { render } from "react-dom";
import { Box } from "@chakra-ui/react";

const renderers = {
  code: ({ language, value }: { language: string; value: string }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

const MarkDownPreview: React.FC<{ str: string }> = ({ str }) => {
  const previewArea = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (previewArea.current === null) return;
    render(
      <ReactMarkdown renderers={renderers} children={str} />,
      previewArea.current
    );
  }, [str]);

  return (
    <Box
      px={5}
      py={5}
      height="calc(100vh - 5.5rem)"
      overflow="auto"
      ref={previewArea}
    ></Box>
  );
};

export default MarkDownPreview;
