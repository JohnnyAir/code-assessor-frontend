import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { render } from "react-dom";
import gfm from "remark-gfm";
import { MarkDownContainer } from "./style";

// import languages to highlight
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import clike from "react-syntax-highlighter/dist/esm/languages/prism/clike";

SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("clike", clike);

const renderers = {
  code: ({ language, value }: { language: string; value: string }) => {
    return (
      <SyntaxHighlighter style={dracula} language={language} children={value} />
    );
  },
};

const MarkDownPreview: React.FC<{ str: string }> = ({ str }) => {
  const previewArea = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (previewArea.current === null) return;
    render(
      <ReactMarkdown
        plugins={[[gfm, { singleTilde: false }]]}
        renderers={renderers}
        children={str}
      />,
      previewArea.current
    );
  }, [str]);

  return <MarkDownContainer ref={previewArea} />;
};

export default MarkDownPreview;
