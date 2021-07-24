import React from "react";
import Editor from "react-markdown-editor-lite";
import MarkDownPreview, { Ass } from "./index";
import { MarkDownEditorStyle } from "./style";
import "react-markdown-editor-lite/lib/index.css";

type MarkdownEditorProps = {
  text: string;
};

export default function MarkdownEditor() {
  const [value, setValue] = React.useState("*your questions goes here.*");

  const handleEditorChange = (props: MarkdownEditorProps) => {
    const newValue = props.text.replace(/\d/g, "");
    setValue(newValue);
  };

  return (
    <MarkDownEditorStyle>
      <Editor
        value={value}
        onChange={handleEditorChange}
        renderHTML={(text) => <Ass str={text} />}
      />
    </MarkDownEditorStyle>
  );
}
