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

type MarkDownRenderersProps = { language: string; value: string };

const renderers = {
  code: (props: MarkDownRenderersProps) => {
    console.log(props)
    return (
      <SyntaxHighlighter
        style={dracula}
        language={props.language || "clike"}
        children={props.value || ""}
      />
    );
  },
};

type MarkDownPreviewProps = { str: string };

const MarkDownPreview: React.FC<MarkDownPreviewProps> = ({ str }) => {
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

export function Ass({ str }: MarkDownPreviewProps) {
  return (
    <ReactMarkdown
      plugins={[[gfm, { singleTilde: false }]]}
      renderers={renderers}
      children={str}
    />
  );
}

export default MarkDownPreview;
