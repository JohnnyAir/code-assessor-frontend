import React, { FC, useEffect, useRef } from "react";
import CodeMirror, { EditorConfiguration } from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/hint/show-hint";
import "codemirror/keymap/sublime";
interface CodeEditorProps {
  options: EditorConfiguration;
  language: string;
  defaultValue?: string;
}

const defaultOptions: EditorConfiguration = {
  keyMap: "sublime",
  autoCloseBrackets: true,
  showHint: true,
  matchBrackets: true,
};

const CodeEditor: FC<CodeEditorProps> = (props) => {
  const { options, language, defaultValue } = props;

  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    require(`codemirror/mode/${language}/${language}.js`);
    // require(`codemirror/theme/${options.theme || "default"}.css`);
  }, [language, options.theme]);

  useEffect(() => {
    if (textarea.current === null) return;
    const cm = CodeMirror.fromTextArea(
      textarea.current,
      Object.assign(defaultOptions, options)
    );
    return cm.toTextArea;
  }, [options]);

  return <textarea ref={textarea} defaultValue={defaultValue} />;
};

export default CodeEditor;
