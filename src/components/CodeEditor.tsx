import { FC, useEffect, useRef } from "react";
import CodeMirror, { EditorConfiguration } from "codemirror";
import "codemirror/addon/edit/closebrackets";

interface CodeEditorProps {
  options: EditorConfiguration;
  language: string;
  defaultValue?: string;
}

const CodeEditor: FC<CodeEditorProps> = (props) => {
  const {
    options,
    language,
    defaultValue = "//Write your code here \n",
  } = props;

  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    require(`codemirror/mode/${language}/${language}.js`);
    require(`codemirror/theme/${options.theme || "default"}.css`);
  }, [language, options.theme]);

  useEffect(() => {
    if (textarea.current === null) return;
    CodeMirror.fromTextArea(textarea.current, options);
  }, [options]);

  return <textarea ref={textarea} defaultValue={defaultValue} />;
};

export default CodeEditor;
