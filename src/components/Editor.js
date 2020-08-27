import React, { useEffect, createRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";
import "codemirror/addon/edit/closebrackets";

let codeEditor = null;

function Editor({ mode, theme, defaultValue }) {
  const textArea = createRef();
  useEffect(() => {
    codeEditor = CodeMirror.fromTextArea(textArea.current, {
      mode: mode || { name: "text/x-java" },
      theme: theme || "default",
      lineNumbers: false,
      autofocus: true,
      autoCloseBrackets: true
    });
  });
  return (
    <textarea
      ref={textArea}
      defaultValue={defaultValue || "//Write your code here \n"}
    />
  );
}

export { codeEditor };
export default Editor;
