import React, { useEffect, createRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";

function Editor({ mode, theme, defaultValue }) {
  const textArea = createRef();
  useEffect(() => {
    window.CodeMirror = CodeMirror.fromTextArea(textArea.current, {
      mode: mode || { name: "text/x-java" },
      theme: theme || "default",
      lineNumbers: true
    });
  });
  return <textarea ref={textArea} defaultValue={defaultValue} />;
}

export default Editor;
